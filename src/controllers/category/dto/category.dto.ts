import { ICategory, CategorySort } from '../interface/category.interface'
import { ApiProperty } from '@nestjs/swagger'
import {
  // IsNumber,
  IsNotEmpty,
  IsString,
  IsEnum,
  // IsOptional,
} from 'class-validator'

export class CategoryDto implements ICategory {
  @ApiProperty({ required: true, description: '文章分类名称' })
  @IsString({ message: '必须为字符串' })
  @IsNotEmpty({ message: '不能为空' })
  name: string

  @ApiProperty({ required: true, description: '文章分类描述' })
  @IsString({ message: '必须为字符串' })
  @IsNotEmpty({ message: '不能为空' })
  description: string

  @ApiProperty({
    required: true,
    description: '文章分类排序',
    enum: CategorySort,
  })
  @IsEnum(CategorySort, {
    message: `分类排序必须为： ${CategorySort.ASC} 或 ${CategorySort.DESC}`,
  })
  sort: CategorySort
}
