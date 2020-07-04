import { Module } from '@nestjs/common'
import { ArticleService } from 'src/service/article/article.service'
import { ArticleController } from 'src/controllers/article/article.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Article } from 'src/entities/article.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Article])],
  controllers: [ArticleController],
  providers: [ArticleService],
  exports: [ArticleService],
})
export class ArticleModule {}
