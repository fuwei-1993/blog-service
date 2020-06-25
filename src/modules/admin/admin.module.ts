import { Module } from '@nestjs/common'
import { AuthModule } from '../auth/auth.module'
import { AuthController } from 'src/controllers/auth/auth.controller'
import { CategoryModule } from '../category/category.module'
import { ArticleModule } from '../article/article.module'
import { UserModule } from '../user/user.module'

@Module({
  imports: [UserModule, AuthModule, CategoryModule, ArticleModule],
  controllers: [AuthController],
})
export class AdminModule {}
