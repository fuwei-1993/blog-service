import { Injectable, OnModuleInit } from '@nestjs/common'
import { UserService } from '../user/user.service'
import { JwtService } from '@nestjs/jwt'
import { IUser } from 'src/controllers/user/interface/user.interface'
import { ModuleRef } from '@nestjs/core'

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
    const payload = {
      username,
      sub: uuid,
      roles,
    }
    return {
      accessToken: this.jwtService.sign(payload),
    }
  }
}
