import { Module } from '@nestjs/common'
import { AuthModule } from '../auth/auth.module'
import { AuthController } from 'src/controllers/auth/auth.controller'
import { CategoryModule } from './category/category.module'
import { ArticleModule } from './article/article.module'
import { UserModule } from './user/user.module'
import { CommentModule } from './comment/comment.module'
import { APP_GUARD } from '@nestjs/core'
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard'

@Module({
  imports: [
    AuthModule,
    UserModule,
    CategoryModule,
    ArticleModule,
    CommentModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AdminModule {}
