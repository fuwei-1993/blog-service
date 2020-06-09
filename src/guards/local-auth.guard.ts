import {
  Injectable,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context)
  }

  handleRequest(err, user, info) {
    console.log(err, user, info)
    if (!user) {
      throw new HttpException('你妈喊你回去吃饭', HttpStatus.UNAUTHORIZED)
    }

    return user
  }
}
