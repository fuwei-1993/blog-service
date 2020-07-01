import { CategorySort } from '../interface/category.interface'
import { IsString, IsEnum, IsOptional } from 'class-validator'
import { ApiPropertyOptional } from '@nestjs/swagger'

export class CategoryUpdateDto {
  @ApiPropertyOptional()
  @IsString({ message: '必须为字符串' })
  @IsOptional()
  name?: string

  @ApiPropertyOptional()
  @IsString({ message: '必须为字符串' })
  @IsOptional()
  description?: string

  @ApiPropertyOptional({ enum: CategorySort })
  @IsEnum(CategorySort, {
    message: `分类排序必须为： ${CategorySort.ASC} 或 ${CategorySort.DESC}`,
  })
  @IsOptional()
  sort?: CategorySort
}
