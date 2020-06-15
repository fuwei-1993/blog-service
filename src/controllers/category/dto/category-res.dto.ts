import { ICategory, CategorySort } from '../interface/category.interface'
import { ApiProperty } from '@nestjs/swagger'

export class CategoryResDto implements ICategory {
  @ApiProperty({ required: false })
  name: string

  @ApiProperty({ required: false })
  id: number

  @ApiProperty({ required: false })
  description: string

  @ApiProperty({ required: false })
  sort: CategorySort

  @ApiProperty({ required: false })
  userId: number

  @ApiProperty({ required: false })
  // @Transform(value => )
  createdAt: Date

  @ApiProperty({ required: false })
  updatedAt: Date
}
