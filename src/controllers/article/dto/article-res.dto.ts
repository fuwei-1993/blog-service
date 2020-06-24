import { ArticleStatus, IArticleMeta } from '../interface/article.interface'
import { ApiPropertyOptional } from '@nestjs/swagger'
import { Transform } from 'class-transformer'

export class ArticleResDto {
  @ApiPropertyOptional()
  title?: string

  @ApiPropertyOptional()
  keyword?: string

  @ApiPropertyOptional()
  status?: ArticleStatus

  @ApiPropertyOptional()
  publish?: boolean

  @ApiPropertyOptional()
  meta?: IArticleMeta

  @ApiPropertyOptional()
  thumb?: string

  @ApiPropertyOptional()
  userId?: number

  @ApiPropertyOptional()
  categoryId?: number

  @ApiPropertyOptional()
  @Transform((date: string | number | Date) => +new Date(date))
  createdAt: Date

  @ApiPropertyOptional()
  @Transform((date: string | number | Date) => +new Date(date))
  updatedAt: Date
}
