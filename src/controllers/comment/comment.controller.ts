import { Controller, Get, Post, Param } from '@nestjs/common'
import { ApiTags, ApiBody, ApiOkResponse } from '@nestjs/swagger'
import { CommentCreateDto } from './dto/comment-create.dto'
import { SuccessResDto } from 'src/common/dto'

@Controller('comment')
@ApiTags('博客评论')
export class CommentController {
  @Get('find/:articleId')
  findAllByArticle() {
    return
  }

  @Post(':articleId')
  @ApiBody({
    type: CommentCreateDto,
    description: '创建评论',
  })
  @ApiOkResponse({
    type: SuccessResDto,
  })
  create(@Param('articleId') id: string) {
    return id
  }
}
