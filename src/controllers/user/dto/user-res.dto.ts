import { IUser } from '../interface/user.interface'
import { Transform, Exclude, Expose } from 'class-transformer'

export class UserResDto implements IUser {
  @Exclude()
  id: number
  @Expose({ name: 'id' })
  uuid: string

  username: string
  password: string
  mobile: string
  email: string

  @Transform(date => +new Date(date))
  createdAt: Date

  @Transform(date => +new Date(date))
  updatedAt: Date

  roles: string[]
}
