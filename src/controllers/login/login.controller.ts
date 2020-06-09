import { Controller, Post, Body, UseGuards } from '@nestjs/common'
import { Request } from 'express'
import { LocalAuthGuard } from 'src/guards/local-auth.guard'

@Controller('login')
export class LoginController {
  @Post()
  // @ApiForbiddenResponse({ description: 'Forbidden.' })
  @UseGuards(LocalAuthGuard)
  login(@Body() userInfo: Request['body']) {
    console.log(345)
    return userInfo
  }
}
