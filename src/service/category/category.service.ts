import { Injectable, BadRequestException } from '@nestjs/common'
import { Repository } from 'typeorm'
import { Category } from 'src/entities/category.entity'
import { CategoryCreateDto } from 'src/controllers/category/dto/category-create.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { plainToClass } from 'class-transformer'
import { CategoryResDto } from 'src/controllers/category/dto/category-res.dto'
import { CategoryUpdateDto } from 'src/controllers/category/dto/category-update.dto'

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
