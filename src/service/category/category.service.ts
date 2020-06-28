import { Injectable, BadRequestException } from '@nestjs/common'
import { Repository, createQueryBuilder } from 'typeorm'
import { Category } from 'src/entities/category.entity'
import { CategoryCreateDto } from 'src/controllers/category/dto/category-create.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { plainToClass } from 'class-transformer'
import { CategoryResDto } from 'src/controllers/category/dto/category-res.dto'
import { CategoryUpdateDto } from 'src/controllers/category/dto/category-update.dto'
import { User } from 'src/entities/user.entity'

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async createCategory(category: CategoryCreateDto, userId: string) {
    const isExist: Category | undefined = await createQueryBuilder<Category>(
      'category',
    )
      .where('category.userUuid = :userId', {
        userId,
      })
      .andWhere('category.name = :name ', {
        name: category.name,
      })
      .getOne()

    if (isExist) {
      throw new BadRequestException({ message: '该分类已存在' })
    }

    const user = await createQueryBuilder<User>('user')
      .where('user.uuid = :userUuid', { userUuid: userId })
      .getOne()

    const categoryEntity = this.categoryRepository.create({
      ...category,
      user,
    })
    await this.categoryRepository.save(categoryEntity)
  }

  async findCategories(): Promise<CategoryResDto[] | null> {
    const categories: Category[] = await this.categoryRepository.find()
    return categories.map(category => plainToClass(CategoryResDto, category))
  }

  async updateCategory(id: number, categoryUpdateDto: CategoryUpdateDto) {
    await this.categoryRepository.update(id, categoryUpdateDto)
  }

  async deleteCategoryById(id: number) {
    await this.categoryRepository.delete(id)
  }
}
