import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { Request } from 'express'

export const User = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const req: Request = ctx.switchToHttp().getRequest()
    return data ? req.user && req.user[data] : req.user
  },
)
