import { IArticleInfo, ArticleStatus } from '../interface/article.interface'
import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger'
import {
  IsEnum,
  IsOptional,
  IsNotEmpty,
  IsString,
  ValidateNested,
  IsNotEmptyObject,
} from 'class-validator'
import { ArticleMetaDto } from './article-meta.dto'

export class ArticleCreateDto implements IArticleInfo {
  @ApiProperty({ description: '文章标题' })
  @IsNotEmpty({ message: '标题不能为空' })
  @IsString()
  title: string

  @ApiProperty({ description: '文章关键字' }) //必选
  @IsNotEmpty({ message: '标题不能为空' })
  @IsString()
  keyword: string

  @ApiPropertyOptional({
    description: '文章状态',
    enum: ArticleStatus,
    default: ArticleStatus.PUBLIC,
  }) //可选
  @IsEnum(ArticleStatus, {
    message: `文章状态必须为： ${ArticleStatus.DRAFT} 或 ${ArticleStatus.PUBLIC}`,
  })
  @IsOptional()
  status?: ArticleStatus

  @ApiProperty({ description: '是否发布' })
  publish: boolean

  @ApiProperty({
    type: ArticleMetaDto,
    description: '文章元数据',
    default: { views: 0, comments: 0, likes: 0 },
  })
  @IsNotEmptyObject()
  @ValidateNested()
  @IsOptional()
  meta?: ArticleMetaDto

  @ApiPropertyOptional({
    description: '文章的缩略图',
  })
  thumb?: string

  @ApiProperty({
    description: '文章内容',
  })
  @IsString()
  @IsNotEmpty()
  content: string
}
