import { Controller, Post, UseGuards, Get, Req } from '@nestjs/common'
import { LocalAuthGuard } from 'src/guards/local-auth.guard'
import { AuthService } from 'src/service/auth/auth.service'
import { Auth } from 'src/decorators/auth.decorator'
import { User } from 'src/decorators/user.decorator'
import { ApiBody } from '@nestjs/swagger'
import { LoginDto } from './dto/login.dto'
import { UserService } from 'src/service/user/user.service'
import { Request } from 'express'

@Controller('login')
export class LoginController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post()
  // @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiBody({
    type: LoginDto,
  })
  @UseGuards(LocalAuthGuard)
  async login(@User() user: NUser.User) {
    const accessToken = await this.authService.login(user)
    return accessToken
  }

  @Get()
  @Auth('wei')
  async find(@Req() request: Request) {
    console.log(request.user)
    console.log(this.userService)
  }

  @Post('test')
  async testPostUser(@User() user: NUser.User) {
    console.log(user)
  }
}
