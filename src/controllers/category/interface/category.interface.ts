export enum CategorySort {
  DESC = 'DESC',
  ASC = 'ASC',
}

export interface ICategoryInfo {
  name: string
  description: string
  sort: CategorySort
  userId: number
  createdAt: Date
  updatedAt: Date
}
