import { ICategory, CategorySort } from '../interface/category.interface'

export class CategoryResDto implements ICategory {
  name: string
  id: number
  description: string
  sort: CategorySort
  userId?: number
  createdAt?: Date
  updatedAt?: Date
}
