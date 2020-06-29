import { Controller, Get } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

@Controller('comment')
@ApiTags('博客评论')
export class CommentController {
  @Get()
  findByArticle() {
    return
  }
}
