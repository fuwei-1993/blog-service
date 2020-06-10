import { Controller, Get, Post } from '@nestjs/common'
import { ApiCreatedResponse } from '@nestjs/swagger'
import { ArticleInfoDto } from './dto/article.dto'

@Controller('article')
export class ArticleController {
  @Get('find')
  findArticles() {
    return 'test'
  }

  @Post('create')
  @ApiCreatedResponse({
    type: ArticleInfoDto,
    description: '创建文章',
  })
  create() {
    return
  }
}
