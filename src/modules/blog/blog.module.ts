import { Module } from '@nestjs/common'
import { ArticleController } from 'src/controllers/article/article.controller'

@Module({
  controllers: [ArticleController],
})
export class BlogModule {}
