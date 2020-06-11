import { Module } from '@nestjs/common'
import { AuthModule } from '../auth/auth.module'
import { LoginController } from 'src/controllers/login/login.controller'
import { CategoryModule } from '../category/category.module'

@Module({
  imports: [AuthModule, CategoryModule],
  controllers: [LoginController],
})
export class AdminModule {}
