import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class CommentCreateDto {
  @ApiProperty({
    description: '文章id',
  })
  @IsString({ message: '必须为字符串' })
  articleId: string

  @ApiProperty({
    description: '评论内容',
  })
  @IsString({ message: '必须为字符串' })
  content: string
}
