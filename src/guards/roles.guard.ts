import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'
import { Request } from 'express'
import { Reflector } from '@nestjs/core'
import { matchRoles } from 'src/utils'

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  async canActivate(context: ExecutionContext) {
    const handlerRoles =
      this.reflector.get<string[]>('roles', context.getHandler()) ?? []
    const classRoles =
      this.reflector.get<string[]>('roles', context.getClass()) ?? []

    const request: Request = context.switchToHttp().getRequest()
    const user = request.user as any // todo...

    if (!handlerRoles.length && !classRoles.length) return true

    const rolesCollection: string[] = [...handlerRoles, ...classRoles]

    return !!user && user.roles && matchRoles(rolesCollection, user.roles)
  }
}
