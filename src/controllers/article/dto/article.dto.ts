import { IArticleInfo, ArticleStatus } from '../interface/article.interface'
import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsEnum, IsOptional, IsString } from 'class-validator'

export class ArticleInfoDto implements IArticleInfo {
  @ApiPropertyOptional({ description: '文章标题' })
  title: string

  @ApiPropertyOptional({ description: '文章关键字' })
  keyword: string

  @ApiPropertyOptional({ description: '文章状态', enum: ArticleStatus })
  @IsString()
  @IsEnum(ArticleStatus, {
    message: `文章状态必须为： ${ArticleStatus.DRAFT} 或 ${ArticleStatus.PUBLIC}`,
  })
  @IsOptional()
  status: ArticleStatus

  @ApiPropertyOptional({ description: '是否发布' })
  publish: boolean

  meta: { views: number; likes: number; comments: number }

  @ApiPropertyOptional({
    description: '文章的缩略图',
  })
  thumb?: string
}
