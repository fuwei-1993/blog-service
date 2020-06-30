export enum CategorySort {
  DESC = 'DESC',
  ASC = 'ASC',
}

export interface ICategory {
  id: number
  uuid: string
  name: string
  description: string
  sort: CategorySort
  createdAt: Date
  updatedAt: Date
}
