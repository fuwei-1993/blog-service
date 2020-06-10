import {
  Injectable,
  HttpException,
  UnauthorizedException,
} from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-local'
import { AuthService } from 'src/service/auth/auth.service'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super()
  }

  async validate(
    username: string,
    password: string,
  ): Promise<HttpException | TUser.User> {
    const user = await this.authService.validateUser(username, password)
    console.log(user, 'fuwei')
    if (user) {
      return user
    }

    throw new UnauthorizedException({ description: '你妈喊你回去吃饭' })
  }
}
