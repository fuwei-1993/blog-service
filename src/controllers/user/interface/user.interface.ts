import { IArticle } from 'src/controllers/article/interface/article.interface'
import { ICategory } from 'src/controllers/category/interface/category.interface'

export interface IUser {
  id: number
  username: string
  uuid: string
  password: string
  mobile: string | null
  email: string | null
  articles: IArticle[]
  categories: ICategory[]
  createdAt: Date
  updatedAt: Date
}