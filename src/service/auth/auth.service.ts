import { Injectable } from '@nestjs/common'
import { UserService } from '../user/user.service'
import { JwtService } from '@nestjs/jwt'
import { IUser } from 'src/controllers/user/interface/user.interface'

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  async validateUser(
    username: string,
    password: string,
  ): Promise<IUser | null> {
    const user = await this.userService.findOneByName(username)
    if (user && user.password === password) {
      return user
    }

    return null
  }

  async login(user: Partial<IUser>) {
    const { username, uuid, roles } = user
    const payload: NUser.IUserPayload = {
      username,
      sub: uuid,
      roles,
    }
    return {
      accessToken: this.jwtService.sign(payload),
    }
  }
}
