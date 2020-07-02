import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common'
import { ApiBearerAuth, ApiUnauthorizedResponse } from '@nestjs/swagger'
import { RolesGuard } from 'src/guards/roles.guard'
import { RolesConstants } from 'src/utils/constant'

export function Auth(...roles: RolesConstants[]) {
  return applyDecorators(SetMetadata('roles', roles), UseGuards(RolesGuard))
}

export function AuthSwagger() {
  return applyDecorators(
    ApiBearerAuth(),
    ApiUnauthorizedResponse({
      description: '抱歉你暂时没有权限访问',
    }),
  )
}
