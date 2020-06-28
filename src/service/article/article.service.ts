import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Article } from 'src/entities/article.entity'
import { ArticleCreateDto } from 'src/controllers/article/dto/article-create.dto'
import { Repository, createQueryBuilder } from 'typeorm'
import { ArticleUpdateDto } from 'src/controllers/article/dto/article-update.dto'
import { ArticleResDto } from 'src/controllers/article/dto/article-res.dto'
import { plainToClass } from 'class-transformer'
import { User } from 'src/entities/user.entity'
import { Category } from 'src/entities/category.entity'

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
  ) {}

  async findArticles(): Promise<ArticleResDto[]> {
    const articles: Article[] = await this.articleRepository.find()
    return articles.map(article => plainToClass(ArticleResDto, article))
  }

  async createArticle(article: ArticleCreateDto, userId: string) {
    const { categoryId } = article
    const user = await createQueryBuilder<User>('user')
      .where('user.uuid = :userId', {
        userId,
      })
      .getOne()

    const category = await createQueryBuilder<Category>('category')
      .where('category.userUuid = :userId and category.id = :categoryId', {
        userId,
        categoryId,
      })
      .getOne()

    const articleEntity = this.articleRepository.create({
      ...article,
      user,
      category,
    })
    await this.articleRepository.save(articleEntity)
  }

  async updateArticle(id: number, article: ArticleUpdateDto) {
    await this.articleRepository.update({ id }, article)
  }

  async deleteArticleById(id: number) {
    await this.articleRepository.delete({ id })
  }
}
