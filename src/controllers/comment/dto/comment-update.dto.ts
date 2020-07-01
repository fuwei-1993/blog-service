import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class CommentUpdateDto {
  @ApiProperty({
    description: '评论内容',
  })
  @IsString({ message: '必须为字符串' })
  content: string
}
