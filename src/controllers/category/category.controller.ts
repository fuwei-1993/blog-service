import { Controller, Post, Body } from '@nestjs/common'
import { ApiTags, ApiCreatedResponse, ApiBody } from '@nestjs/swagger'
import { CategoryDto } from './dto/category.dto'
import { CategoryService } from 'src/service/category/category.service'

@ApiTags('博客文章分类')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('create')
  @ApiCreatedResponse({
    description: '创建文章分类',
  })
  @ApiBody({
    type: CategoryDto,
    description: '创建文章参数',
  })
  async categoryCreate(@Body() category: CategoryDto) {
    await this.categoryService.createCategory(category)
  }
}
