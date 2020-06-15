import { Injectable, BadRequestException } from '@nestjs/common'
import { Repository } from 'typeorm'
import { Category } from 'src/entities/category.entity'
import { CategoryCreateDto } from 'src/controllers/category/dto/category-create.dto'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async createCategory(category: CategoryCreateDto) {
    const isExist = await this.categoryRepository.findOne({
      name: category.name,
    })
    if (isExist) {
      throw new BadRequestException({ description: '该分类已存在' })
    }
    await this.categoryRepository.save(category)
  }

  async findCategories(): Promise<Category[] | null> {
    return await this.categoryRepository.find()
  }
}
