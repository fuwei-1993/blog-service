import { IUser } from '../interface/user.interface'
import { IArticle } from 'src/controllers/article/interface/article.interface'
import { ICategory } from 'src/controllers/category/interface/category.interface'

export class UserResDto implements IUser {
  id: number
  username: string
  uuid: string
  password: string
  mobile: string
  email: string
  articles: IArticle[]
  categories: ICategory[]
  createdAt: Date
  updatedAt: Date
}
