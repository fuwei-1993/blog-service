import { Controller, Post, Body, UseGuards, Get, Req } from '@nestjs/common'
import { Request } from 'express'
import { LocalAuthGuard } from 'src/guards/local-auth.guard'

@Controller('login')
export class LoginController {
  @Post()
  // @ApiForbiddenResponse({ description: 'Forbidden.' })
  @UseGuards(LocalAuthGuard)
  login(@Req() request: Request) {
    console.log(request.user)
  }

  @Get()
  find(@Req() request: Request) {
    console.log(request.user)
  }
}
