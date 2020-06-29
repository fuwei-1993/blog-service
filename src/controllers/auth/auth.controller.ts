import { Controller, Post, UseGuards, Get, Req } from '@nestjs/common'
import { LocalAuthGuard } from 'src/guards/local-auth.guard'
import { AuthService } from 'src/service/auth/auth.service'
import { Auth } from 'src/decorators/auth.decorator'
import { User } from 'src/decorators/user.decorator'
import { ApiBody, ApiTags } from '@nestjs/swagger'
import { LoginDto } from './dto/login.dto'
import { UserService } from 'src/service/user/user.service'
import { Request } from 'express'

@ApiTags('权限')
@Controller('login')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post()
  @ApiBody({
    type: LoginDto,
  })
  @UseGuards(LocalAuthGuard)
  async login(@User() user: LoginDto) {
    return await this.authService.login(user)
  }
}
