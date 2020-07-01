import {
  Injectable,
  HttpException,
  UnauthorizedException,
} from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-local'
import { AuthService } from 'src/service/auth/auth.service'
import { IUser } from 'src/controllers/user/interface/user.interface'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super()
  }

  async validate(
    username: string,
    password: string,
  ): Promise<HttpException | IUser> {
    const user = await this.authService.validateUser(username, password)
    if (user) {
      return user
    }

    throw new UnauthorizedException({ message: '用户名或者密码错误' })
  }
}
