export interface IUser {
  id: number
  username: string
  uuid: string
  password: string
  mobile: string | null
  email: string | null
  roles: string[]
  createdAt: Date
  updatedAt: Date
}
