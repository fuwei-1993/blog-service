import {
  ArticleStatus,
  IArticleMeta,
  IArticle,
} from '../interface/article.interface'
import { ApiPropertyOptional } from '@nestjs/swagger'
import { Transform, Exclude, Expose } from 'class-transformer'

export class ArticleResDto implements IArticle {
  @ApiPropertyOptional()
  title: string

  @Exclude()
  id: number

  @ApiPropertyOptional({
    name: 'id',
  })
  @Expose({ name: 'id' })
  uuid: string

  @ApiPropertyOptional()
  keyword: string

  @ApiPropertyOptional()
  status: ArticleStatus

  @ApiPropertyOptional()
  publish: boolean

  @ApiPropertyOptional()
  meta: IArticleMeta

  @ApiPropertyOptional()
  thumb: string

  content: string
  @ApiPropertyOptional()
  @Transform((date: string | number | Date) => +new Date(date))
  createdAt: Date

  @ApiPropertyOptional()
  @Transform((date: string | number | Date) => +new Date(date))
  updatedAt: Date
}
