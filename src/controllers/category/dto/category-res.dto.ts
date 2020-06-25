import { CategorySort } from '../interface/category.interface'
import { ApiPropertyOptional } from '@nestjs/swagger'
import { Transform } from 'class-transformer'

export class CategoryResDto {
  @ApiPropertyOptional()
  name: string

  @ApiPropertyOptional()
  id: number

  @ApiPropertyOptional()
  description: string

  @ApiPropertyOptional()
  sort: CategorySort

  @ApiPropertyOptional()
  userId: number

  @ApiPropertyOptional()
  @Transform(date => +new Date(date))
  createdAt: Date

  @ApiPropertyOptional()
  @Transform(date => +new Date(date))
  updatedAt: Date
}
