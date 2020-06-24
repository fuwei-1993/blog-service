import { Injectable } from '@nestjs/common'

@Injectable()
export class UserService {
  mockUsers: NUser.User[] = [
    {
      username: 'test',
      password: 'test',
      userId: '234',
      roles: ['wei', 'baba'],
    },
  ]
  async findOne(username: string): Promise<NUser.User | null> {
    return this.mockUsers.find(user => user.username === username)
  }
}
