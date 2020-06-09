import { Module } from '@nestjs/common'
import { AuthModule } from '../auth/auth.module'
import { LoginController } from 'src/controllers/login/login.controller'

@Module({
  imports: [AuthModule],
  controllers: [LoginController],
})
export class AdminModule {}
