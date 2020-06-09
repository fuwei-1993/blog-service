import { Injectable } from '@nestjs/common'

@Injectable()
export class UserService {
  mockUsers: TUser.User[] = [
    {
      username: 'test',
      password: 'test',
    },
  ]
  async findOne(username: string): Promise<TUser.User | null> {
    return this.mockUsers.find(user => user.username === username)
  }
}
