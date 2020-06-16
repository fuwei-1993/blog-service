import { Module } from '@nestjs/common'
import { AuthModule } from '../auth/auth.module'
import { LoginController } from 'src/controllers/login/login.controller'
import { CategoryModule } from '../category/category.module'
import { ArticleModule } from '../article/article.module'

@Module({
  imports: [AuthModule, CategoryModule, ArticleModule],
  controllers: [LoginController],
})
export class AdminModule {}
