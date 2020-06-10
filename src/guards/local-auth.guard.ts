import {
  Injectable,
  ExecutionContext,
  HttpException,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest()
    const { body } = request
    // 注意 使用手动白名单 会绕过策略校验
    if (body.name === 'fuwei') {
      request.user = {
        username: 'fuwei',
        password: 'test',
      }
      return true
    }
    return super.canActivate(context)
  }

  handleRequest(err, user, info) {
    console.log(err, user, info)
    if (err || !user) {
      throw err || new BadRequestException({ description: '你妈喊你回去吃饭' })
    }

    return user
  }
}
