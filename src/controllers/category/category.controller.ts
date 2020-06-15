import { Controller, Post, Body, Get } from '@nestjs/common'
import {
  ApiTags,
  ApiCreatedResponse,
  ApiBody,
  ApiOkResponse,
} from '@nestjs/swagger'
import { CategoryCreateDto } from './dto/category-create.dto'
import { CategoryService } from 'src/service/category/category.service'
import { Category } from 'src/entities/category.entity'
import { CategoryResDto } from './dto/category-res.dto'

@ApiTags('博客文章分类')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('create')
  @ApiCreatedResponse({
    description: '创建文章分类',
  })
  @ApiBody({
    type: CategoryCreateDto,
    description: '创建文章参数',
  })
  // @ApiOkResponse({ type: CategoryResDto })
  // @HttpCode(HttpStatus.CREATED)
  async createCategory(@Body() category: CategoryCreateDto) {
    await this.categoryService.createCategory(category)
  }

  @Get('find')
  @ApiOkResponse({ type: [CategoryResDto], description: '查询全部文章分类' })
  async findCategories(): Promise<Category[]> {
    return await this.categoryService.findCategories()
  }
}
