import { CategorySort } from '../interface/category.interface'
import { ApiPropertyOptional } from '@nestjs/swagger'

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
  createdAt: Date

  @ApiPropertyOptional()
  updatedAt: Date
}
