import { IUser } from '../interface/user.interface'

export class UserResDto implements IUser {
  id: number
  username: string
  uuid: string
  password: string
  mobile: string
  email: string
  createdAt: Date
  updatedAt: Date
  roles: string[]
}
