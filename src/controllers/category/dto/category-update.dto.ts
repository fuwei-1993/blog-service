import { ICategory, CategorySort } from '../interface/category.interface'
import { IsString, IsEnum, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CategoryUpdateDto implements ICategory {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  name?: string

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  description?: string

  @ApiProperty({ required: false, enum: CategorySort })
  @IsEnum(CategorySort, {
    message: `分类排序必须为： ${CategorySort.ASC} 或 ${CategorySort.DESC}`,
  })
  @IsOptional()
  sort?: CategorySort
}
