import { Injectable } from '@nestjs/common'

@Injectable()
export class UserService {
  mockUsers: NUser.User[] = [
    {
      username: 'test',
      password: 'test',
    },
  ]
  async findOne(username: string): Promise<NUser.User | null> {
    return this.mockUsers.find(user => user.username === username)
  }
}
