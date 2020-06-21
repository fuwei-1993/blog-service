import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common'
import { ApiBearerAuth, ApiUnauthorizedResponse } from '@nestjs/swagger'
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard'

export function Auth(...roles: string[]) {
  return applyDecorators(
    SetMetadata('roles', roles),
    UseGuards(JwtAuthGuard),
    ApiBearerAuth(),
    ApiUnauthorizedResponse({
      description: '抱歉你暂时没有权限访问',
    }),
  )
}
