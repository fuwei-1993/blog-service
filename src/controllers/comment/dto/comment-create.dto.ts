import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class CommentCreateDto {
  @ApiProperty({
    description: '文章id',
  })
  @IsString()
  articleId: string

  @ApiProperty({
    description: '评论内容',
  })
  @IsString()
  content: string
}
