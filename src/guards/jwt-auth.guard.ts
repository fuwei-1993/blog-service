import {
  Injectable,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { Reflector } from '@nestjs/core'
import { jwtConstants } from 'src/utils/constant'

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private readonly reflector: Reflector) {
    super()
  }

  canActivate(context: ExecutionContext) {
    const isPassJwt = this.reflector.get(
      jwtConstants.jwtPass,
      context.getHandler(),
    )
    return isPassJwt || super.canActivate(context)
  }

  handleRequest(err, user, info) {
    console.log(err, user, info, 'jwt')
    if (err || !user) {
      throw err || new UnauthorizedException({ message: '你没有权限访问 jwt' })
    }
    return user
  }
}
