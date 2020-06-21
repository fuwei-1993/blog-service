import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import {
  ApiCreatedResponse,
  ApiTags,
  ApiBody,
  ApiOkResponse,
} from '@nestjs/swagger'
import { ArticleCreateDto } from './dto/article-create.dto'
import { SuccessResDto } from 'src/common/dto'
import { ArticleService } from 'src/service/article/article.service'
import { ArticleUpdateDto } from './dto/article-update.dto'
import { ArticleResDto } from './dto/article-res.dto'
import { Auth } from 'src/decorators/auth.decorator'

@ApiTags('博客文章')
@Controller('article')
@Auth('wei')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get('find')
  @ApiOkResponse({
    type: [ArticleResDto],
    description: '查询所有文章',
  })
  findArticles(): Promise<ArticleResDto[]> {
    return this.articleService.findArticles()
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

  @Patch(':id')
  @ApiBody({
    type: ArticleUpdateDto,
    description: '更新文章',
  })
  @ApiOkResponse({
    type: SuccessResDto,
  })
  async update(@Param('id') id: number, @Body() article: ArticleUpdateDto) {
    await this.articleService.updateArticle(id, article)
  }

  @Delete(':id')
  @ApiOkResponse({ type: SuccessResDto, description: '删除文章' })
  async deleteById(@Param('id') id: number) {
    this.articleService.deleteArticleById(id)
  }
}
