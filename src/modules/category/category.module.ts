import { Module } from '@nestjs/common'
import { CategoryController } from 'src/controllers/category/category.controller'
import { CategoryService } from 'src/service/category/category.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Category } from 'src/entities/category.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  providers: [CategoryService],
  controllers: [CategoryController],
})
export class CategoryModule {}
