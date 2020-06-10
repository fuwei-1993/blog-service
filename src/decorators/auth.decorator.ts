import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common'
import { ApiBearerAuth, ApiUnauthorizedResponse } from '@nestjs/swagger'

export function Auth(...roles: any[]) {
  return applyDecorators(
    SetMetadata('roles', roles),
    UseGuards(),
    ApiBearerAuth(),
    ApiUnauthorizedResponse({
      description: '抱歉你暂时没有权限访问',
    }),
  )
}
