import { Controller, Post, UseGuards } from '@nestjs/common'
import { LocalAuthGuard } from 'src/guards/local-auth.guard'
import { AuthService } from 'src/service/auth/auth.service'
import { User } from 'src/decorators/user.decorator'
import { ApiBody, ApiTags } from '@nestjs/swagger'
import { LoginDto } from './dto/login.dto'
import { JwtPass } from 'src/decorators/jwt-pass.decorator'

@ApiTags('权限')
@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @ApiBody({
    type: LoginDto,
  })
  @JwtPass()
  @UseGuards(LocalAuthGuard)
  async login(@User() user: LoginDto) {
    return await this.authService.login(user)
  }
}
