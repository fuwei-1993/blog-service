import { Injectable, BadRequestException } from '@nestjs/common'
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

    if (!user || !category) {
      throw new BadRequestException({ message: '文章创建失败' })
    }

    const articleEntity = this.articleRepository.create({
      ...article,
      user,
      category,
    })
    await this.articleRepository.save(articleEntity)
  }

  async updateArticle(id: string, article: ArticleUpdateDto) {
    await this.articleRepository.update({ uuid: id }, article)
  }

  async deleteArticleById(id: string) {
    await this.articleRepository.delete({ uuid: id })
  }
}
