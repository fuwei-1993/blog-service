import { Injectable, BadRequestException } from '@nestjs/common'
import { User } from 'src/entities/user.entity'
import { Repository, createQueryBuilder } from 'typeorm'
import { UserResDto } from 'src/controllers/user/dto/user-res.dto'
import { UserCreateDto } from 'src/controllers/user/dto/user-create.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { UserUpdateDto } from 'src/controllers/user/dto/user-update.dto'

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

  async findAll(): Promise<UserResDto[]> {
    return await this.userRepository.find()
  }

  async findOneById(id: string): Promise<UserResDto> {
    // const user = await this.userRepository.findOne({ id })
    // user.categories = await user.categories
    const user = await this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.categories', 'category')
      .where('user.uuid = :id', { id })
      .getOne()
    return user
  }

  async update(id: string, user: UserUpdateDto) {
    await this.userRepository.update({ uuid: id }, user)
  }

  async deleteOneById(id: string) {
    await this.userRepository.delete({ uuid: id })
  }
}
