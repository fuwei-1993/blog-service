export interface IUser {
  id: number
  uuid: string
  username: string
  password: string
  mobile: string | null
  email: string | null
  roles: string[]
  createdAt: Date
  updatedAt: Date
}
