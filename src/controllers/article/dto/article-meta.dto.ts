import { TArticleMeta } from '../interface/article.interface'
import { ApiProperty } from '@nestjs/swagger'

export class ArticleMetaDto implements TArticleMeta {
  @ApiProperty({ description: '阅读数量' })
  views: number

  @ApiProperty({ description: '喜欢数量' })
  likes: number

  @ApiProperty({ description: '评论数量' })
  comments: number
}
