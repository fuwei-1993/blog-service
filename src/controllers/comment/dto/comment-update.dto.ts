import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class CommentUpdateDto {
  @ApiProperty({
    description: '评论内容',
  })
  @IsString()
  content: string
}
