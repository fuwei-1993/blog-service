import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import {
  ApiTags,
  ApiCreatedResponse,
  ApiBody,
  ApiOkResponse,
} from '@nestjs/swagger'
import { CategoryCreateDto } from './dto/category-create.dto'
import { CategoryService } from 'src/service/category/category.service'
import { CategoryResDto } from './dto/category-res.dto'
import { SuccessResDto } from 'src/common/dto'
import { CategoryUpdateDto } from './dto/category-update.dto'

@ApiTags('博客文章分类')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('create')
  @ApiCreatedResponse({
    type: SuccessResDto,
    description: '创建文章分类',
  })
  @ApiBody({
    type: CategoryCreateDto,
    description: '创建文章分类参数',
  })
  async createCategory(@Body() category: CategoryCreateDto) {
    await this.categoryService.createCategory(category)
  }

  @Get('find')
  @ApiOkResponse({ type: [CategoryResDto], description: '查询全部文章分类' })
  async findCategories(): Promise<CategoryResDto[]> {
    return await this.categoryService.findCategories()
  }

  @Patch(':id')
  @ApiBody({
    type: CategoryUpdateDto,
    description: '更新分类',
  })
  @ApiOkResponse({ type: SuccessResDto })
  async updateCategory(
    @Param('id') id: number,
    @Body() category: CategoryUpdateDto,
  ) {
    await this.categoryService.updateCategory(id, category)
  }

  @Delete(':id')
  @ApiOkResponse({ type: SuccessResDto })
  async deleteCategoryById(@Param('id') id: number) {
    await this.categoryService.deleteCategoryById(id)
  }
}
