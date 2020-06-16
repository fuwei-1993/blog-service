import {
  IArticleInfo,
  ArticleStatus,
  TArticleMeta,
} from '../interface/article.interface'
import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsOptional, IsString, IsObject } from 'class-validator'
import { ArticleMetaDto } from './article-meta.dto'

export class ArticleCreateDto implements IArticleInfo {
  @ApiProperty({ description: '文章标题' })
  title: string

  @ApiProperty({ description: '文章关键字' }) //必选
  keyword: string

  @ApiPropertyOptional({
    description: '文章状态',
    enum: ArticleStatus,
    default: ArticleStatus.PUBLIC,
  }) //可选
  @IsString()
  @IsEnum(ArticleStatus, {
    message: `文章状态必须为： ${ArticleStatus.DRAFT} 或 ${ArticleStatus.PUBLIC}`,
  })
  @IsOptional()
  status: ArticleStatus

  @ApiProperty({ description: '是否发布' })
  publish: boolean

  @ApiProperty({
    type: ArticleMetaDto,
    description: '文章元数据',
    default: { views: 0, comments: 0, likes: 0 },
  })
  @IsObject()
  meta: TArticleMeta

  @ApiPropertyOptional({
    description: '文章的缩略图',
  })
  thumb?: string

  @ApiProperty({
    description: '文章内容',
  })
  content: string
}
