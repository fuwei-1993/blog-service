import { IComment } from '../interface/comment.interface'
import { Exclude, Expose } from 'class-transformer'
import { ApiPropertyOptional } from '@nestjs/swagger'

export class CommentResDto implements IComment {
  @Exclude()
  id: number

  @Expose({ name: 'id' })
  uuid: string

  @ApiPropertyOptional()
  content: string

  @ApiPropertyOptional()
  createdAt: Date

  @ApiPropertyOptional()
  updatedAt: Date
}
