import { Controller, Get, Post, Body } from '@nestjs/common'
import { ApiCreatedResponse, ApiTags, ApiBody } from '@nestjs/swagger'
import { ArticleCreateDto } from './dto/article-create.dto'
import { SuccessResDto } from 'src/common/dto'
import { ArticleService } from 'src/service/article/article.service'

@ApiTags('博客文章')
@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get('find')
  findArticles() {
    return 'test'
  }

  @Post('create')
  @ApiCreatedResponse({
    type: SuccessResDto,
    description: '创建文章成功',
  })
  @ApiBody({
    type: ArticleCreateDto,
    description: '创建文章',
  })
  async create(@Body() article: ArticleCreateDto) {
    await this.articleService.createArticle(article)
  }
}
