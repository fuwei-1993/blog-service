import { Controller, Post, Body } from '@nestjs/common'
import { Request } from 'express'

@Controller('login')
export class LoginController {
  @Post()
  login(@Body() userInfo: Request['body']) {
    return userInfo
  }
}
