import { Controller, Get, Post } from '@nestjs/common'
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger'
import { ArticleInfoDto } from './dto/article.dto'

@ApiTags('博客文章')
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
