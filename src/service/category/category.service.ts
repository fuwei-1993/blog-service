import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { Category } from 'src/entities/category.entity'
import { CategoryDto } from 'src/controllers/category/dto/category.dto'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async createCategory(category: CategoryDto) {
    await this.categoryRepository.save(category)
  }
}
