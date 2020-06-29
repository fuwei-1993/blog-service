export enum CategorySort {
  DESC = 'DESC',
  ASC = 'ASC',
}

export interface ICategory {
  name: string
  description: string
  sort: CategorySort
  createdAt: Date
  updatedAt: Date
}
