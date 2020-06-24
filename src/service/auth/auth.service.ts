import { Injectable } from '@nestjs/common'
import { UserService } from '../user/user.service'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(
    username: string,
    password: string,
  ): Promise<NUser.User | null> {
    const user = await this.userService.findOne(username)

    if (user && user.password === password) {
      return user
    }

    return null
  }

  async login(user: NUser.User) {
    const { username, userId, roles } = user
    const payload = {
      username,
      sub: userId,
      roles,
    }
    return {
      accessToken: this.jwtService.sign(payload),
    }
  }
}
