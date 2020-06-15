import { Injectable } from '@nestjs/common'
import { UserService } from '../user/user.service'

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

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
}
