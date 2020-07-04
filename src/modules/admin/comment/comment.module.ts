import { Module } from '@nestjs/common'
import { CommentService } from 'src/service/comment/comment.service'
import { CommentController } from 'src/controllers/comment/comment.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Comment } from 'src/entities/comment.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Comment])],
  providers: [CommentService],
  controllers: [CommentController],
  exports: [CommentService],
})
export class CommentModule {}
