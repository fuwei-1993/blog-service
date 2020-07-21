import { Resolver, Args, Int, Query } from '@nestjs/graphql'
import { Author } from './author.model'
import { plainToClass } from 'class-transformer'

@Resolver(() => Author)
export class AuthorsResolver {
  @Query(() => Author)
  async author(@Args('id', { type: () => Int }) id: number) {
    return plainToClass(Author, {
      firstName: '123',
      id,
      lastName: '234',
    })
  }
}
