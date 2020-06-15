import { ICategory, CategorySort } from '../interface/category.interface'
import { IsString, IsEnum, IsOptional } from 'class-validator'

export class CategoryUpdateDto implements ICategory {
  @IsString()
  @IsOptional()
  name?: string

  @IsString()
  @IsOptional()
  description?: string

  @IsEnum(CategorySort, {
    message: `分类排序必须为： ${CategorySort.ASC} 或 ${CategorySort.DESC}`,
  })
  @IsOptional()
  sort?: CategorySort
}
