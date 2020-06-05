import { Controller, Get } from '@nestjs/common'

@Controller('article')
export class ArticleController {
  @Get('find')
  findArticles() {
    return 'test'
  }
}
