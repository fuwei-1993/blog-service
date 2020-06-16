import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Article } from 'src/entities/article.entity'
import { ArticleCreateDto } from 'src/controllers/article/dto/article-create.dto'
import { Repository } from 'typeorm'
import { ArticleUpdateDto } from 'src/controllers/article/dto/article-update.dto'

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
  ) {}

  async createArticle(article: ArticleCreateDto) {
    const result = this.articleRepository.create(article)
    await this.articleRepository.save(result)
  }

  async updateArticle(id: number, article: ArticleUpdateDto) {
    console.log(id, article)
    await this.articleRepository.update(id, article)
  }
}
