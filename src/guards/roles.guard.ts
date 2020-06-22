import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'
import { Request } from 'express'
import { Reflector, ModuleRef, ContextIdFactory } from '@nestjs/core'
import { matchRoles } from 'src/utils'
// import { UserService } from 'src/service/user/user.service'

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly moduleRef: ModuleRef,
  ) {}

  async canActivate(context: ExecutionContext) {
    const roles = this.reflector.get<string[]>('roles', context.getHandler())
    const request: Request = context.switchToHttp().getRequest()
    const user = request.user as any // todo...

    user.roles = ['wei']
    console.log(user, 'role')
    if (!roles) return true

    return !!user && user.roles && matchRoles(roles, user.roles)
  }
}
