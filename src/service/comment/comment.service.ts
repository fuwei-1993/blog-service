import { Injectable } from '@nestjs/common'
import { Repository, createQueryBuilder } from 'typeorm'
import { Comment } from 'src/entities/comment.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Article } from 'src/entities/article.entity'
import { CommentResDto } from 'src/controllers/comment/dto/comment-res-dto'
import { ArticleResDto } from 'src/controllers/article/dto/article-res.dto'
import { CommentCreateDto } from 'src/controllers/comment/dto/comment-create.dto'
import { UserResDto } from 'src/controllers/user/dto/user-res.dto'
import { User } from 'src/entities/user.entity'
import { CommentUpdateDto } from 'src/controllers/comment/dto/comment-update.dto'

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}

  async getArticle(articleId): Promise<ArticleResDto> {
    return await createQueryBuilder<Article>('article')
      .where('article.uuid = :articleId', { articleId })
      .getOne()
  }

  async getUser(userId): Promise<UserResDto> {
    return await createQueryBuilder<User>('user')
      .where('user.uuid = :userId', {
        userId,
      })
      .getOne()
  }

  async findAllByArticleId(articleId: string): Promise<CommentResDto[]> {
    return await this.commentRepository
      .createQueryBuilder('comment')
      .where('comment.articleUuid = :articleId', { articleId })
      .getMany()
  }

  async findAllByUserId(userId: string): Promise<CommentResDto[]> {
    return await this.commentRepository
      .createQueryBuilder('comment')
      .where('comment.userUuid = :userId', { userId })
      .getMany()
  }

  async create(comment: CommentCreateDto, articleId: string, userId: string) {
    const article = await this.getArticle(articleId)
    const user = await this.getUser(userId)
    const commentEntity = this.commentRepository.create({
      ...comment,
      article,
      user,
    })

    await this.commentRepository.save(commentEntity)
  }

  async update(id: string, comment: CommentUpdateDto) {
    await this.commentRepository.update({ uuid: id }, comment)
  }

  async delete(id: string) {
    await this.commentRepository.delete({ uuid: id })
  }
}
