import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Patch,
  Body,
} from '@nestjs/common'
import { ApiTags, ApiBody, ApiOkResponse } from '@nestjs/swagger'
import { CommentCreateDto } from './dto/comment-create.dto'
import { SuccessResDto } from 'src/common/dto'
import { CommentResDto } from './dto/comment-res-dto'
import { CommentService } from 'src/service/comment/comment.service'
import { User } from 'src/decorators/user.decorator'
import { CommentUpdateDto } from './dto/comment-update.dto'

@Controller('comment')
@ApiTags('博客评论')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get('find/:articleId')
  @ApiOkResponse({
    type: [CommentResDto],
  })
  async findAllByArticleId(
    @Param('articleId') articleId: string,
  ): Promise<CommentResDto[]> {
    return await this.commentService.findAllByArticleId(articleId)
  }

  @Post(':articleId')
  @ApiBody({
    type: CommentCreateDto,
    description: '创建评论',
  })
  @ApiOkResponse({
    type: SuccessResDto,
  })
  async create(
    @Param('articleId') articleId: string,
    @Body() comment: CommentCreateDto,
    @User('id') userId: string,
  ) {
    await this.commentService.create(comment, articleId, userId)
  }

  @Delete(':id')
  @ApiOkResponse({
    type: SuccessResDto,
  })
  async delete(@Param('id') id: string) {
    await this.commentService.delete(id)
  }

  @Patch(':id')
  @ApiOkResponse({
    type: SuccessResDto,
  })
  @ApiBody({
    type: CommentUpdateDto,
  })
  async update(@Param('id') id: string, @Body() comment: CommentUpdateDto) {
    await this.commentService.update(id, comment)
  }
}
