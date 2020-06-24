import { TArticleInfo } from 'src/controllers/article/interface/article.interface'
import { TCategoryInfo } from 'src/controllers/category/interface/category.interface'

export interface User {
  id: number
  username: string
  uuid: string
  password: string
  mobile: string | null
  email: string | null
  articles: TArticleInfo[]
  categories: TCategoryInfo[]
  createdAt: Date
  updatedAt: Date
}
