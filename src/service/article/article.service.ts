import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Article } from 'src/entities/article.entity'
import { ArticleCreateDto } from 'src/controllers/article/dto/article-create.dto'
import { Repository } from 'typeorm'
import { ArticleUpdateDto } from 'src/controllers/article/dto/article-update.dto'
import { ArticleResDto } from 'src/controllers/article/dto/article-res.dto'
import { plainToClass } from 'class-transformer'

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

  async createArticle(article: ArticleCreateDto) {
    const result = this.articleRepository.create(article)
    await this.articleRepository.save(result)
  }

  async updateArticle(id: number, article: ArticleUpdateDto) {
    await this.articleRepository.update(id, article)
  }

  async deleteArticleById(id: number) {
    await this.articleRepository.delete(id)
  }
}
