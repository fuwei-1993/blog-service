import { Module } from '@nestjs/common'
import { UserModule } from '../user/user.module'
import { AuthService } from 'src/service/auth/auth.service'
import { LocalStrategy } from './local.strategy'

@Module({
  imports: [UserModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
