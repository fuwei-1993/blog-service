import {
  Injectable,
  CanActivate,
  ExecutionContext,
  OnModuleInit,
} from '@nestjs/common'
import { Request } from 'express'
import { Reflector, ModuleRef } from '@nestjs/core'
import { matchRoles } from 'src/utils'
import { UserService } from 'src/service/user/user.service'

@Injectable()
export class RolesGuard implements CanActivate, OnModuleInit {
  private service: UserService
  constructor(
    private readonly reflector: Reflector,
    private readonly moduleRef: ModuleRef,
  ) {}

  onModuleInit() {
    // this.service = this.moduleRef.get(UserService)
  }

  async canActivate(context: ExecutionContext) {
    const roles = this.reflector.get<string[]>('roles', context.getHandler())
    const request: Request = context.switchToHttp().getRequest()
    // console.log(this.service)
    const user = request.user as any // todo...
    console.log(user, 'role')
    if (!roles) return true

    return !!user && user.roles && matchRoles(roles, user.roles)
  }
}
