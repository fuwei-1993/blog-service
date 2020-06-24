import { IArticleMeta } from '../interface/article.interface'
import { ApiProperty } from '@nestjs/swagger'
import { IsNumber } from 'class-validator'

export class ArticleMetaDto implements IArticleMeta {
  @ApiProperty({ description: '阅读数量' })
  @IsNumber({ allowInfinity: false }, { message: '必须为数字' })
  views: number

  @ApiProperty({ description: '喜欢数量' })
  @IsNumber({ allowInfinity: false }, { message: '必须为数字' })
  likes: number

  @ApiProperty({ description: '评论数量' })
  @IsNumber({ allowInfinity: false }, { message: '必须为数字' })
  comments: number
}
