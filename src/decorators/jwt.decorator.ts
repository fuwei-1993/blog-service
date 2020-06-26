import { applyDecorators, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard'
import { ApiBearerAuth, ApiUnauthorizedResponse } from '@nestjs/swagger'

export function Jwt() {
  return applyDecorators(
    UseGuards(JwtAuthGuard),
    ApiBearerAuth(),
    ApiUnauthorizedResponse({
      description: '抱歉需要登陆后访问',
    }),
  )
}
