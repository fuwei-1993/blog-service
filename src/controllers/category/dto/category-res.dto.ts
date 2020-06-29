import { CategorySort, ICategory } from '../interface/category.interface'
import { ApiPropertyOptional } from '@nestjs/swagger'
import { Exclude, Transform, Expose } from 'class-transformer'

export class CategoryResDto implements ICategory {
  @ApiPropertyOptional()
  name: string

  @Exclude()
  id: number

  @Expose({ name: 'id' })
  uuid: string

  @ApiPropertyOptional()
  description: string

  @ApiPropertyOptional()
  sort: CategorySort

  @ApiPropertyOptional()
  @Transform(date => +new Date(date))
  createdAt: Date

  @ApiPropertyOptional()
  @Transform(date => +new Date(date))
  updatedAt: Date
}
