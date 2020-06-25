import { Injectable, BadRequestException } from '@nestjs/common'
import { User } from 'src/entities/user.entity'
import { Repository } from 'typeorm'
import { UserResDto } from 'src/controllers/user/dto/user-res.dto'
import { UserCreateDto } from 'src/controllers/user/dto/user-create.dto'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findOneByName(username: string): Promise<UserResDto> {
    return await this.userRepository.findOne({ username })
  }

  async create(user: UserCreateDto) {
    const { username } = user
    const isExist = await this.findOneByName(username)
    if (isExist) {
      throw new BadRequestException({ message: '该用户名已存在' })
    }
    const userEntity = await this.userRepository.create(user)
    await this.userRepository.save(userEntity)
  }
}
