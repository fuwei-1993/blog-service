import { IArticleInfo, ArticleStatus } from '../interface/article.interface'
import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsBoolean, IsString, IsOptional, IsEnum } from 'class-validator'

export class ArticleUpdateDto implements IArticleInfo {
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  title?: string

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  keyword?: string

  @ApiPropertyOptional({ enum: ArticleStatus, default: ArticleStatus.PUBLIC })
  @IsEnum(ArticleStatus, {
    message: `文章状态必须为： ${ArticleStatus.DRAFT} 或 ${ArticleStatus.PUBLIC}`,
  })
  @IsOptional()
  status?: ArticleStatus

  @ApiPropertyOptional()
  @IsBoolean()
  @IsOptional()
  publish?: boolean

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  content?: string
}
