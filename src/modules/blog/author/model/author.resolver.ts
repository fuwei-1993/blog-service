import {
  Resolver,
  Args,
  Int,
  Query,
  Subscription,
  Mutation,
} from '@nestjs/graphql'
import { Author } from './author.model'
import { plainToClass } from 'class-transformer'
import { PubSub } from 'apollo-server-express'

const pubSub = new PubSub()
@Resolver(() => Author)
export class AuthorsResolver {
  @Query(() => Author)
  async author(@Args('id', { type: () => Int }) id: number) {
    const author = plainToClass(Author, {
      firstName: '123',
      id,
      lastName: '234',
    })
    return author
  }

  @Mutation(() => Author, {
    name: 'AddAuthor',
  })
  async addAuthor(@Args('id', { type: () => Int }) id: number) {
    const author = plainToClass(Author, {
      firstName: '123',
      id,
      lastName: '234',
    })
    pubSub.publish('authorAdded', { authorAdded: author })
    return author
  }

  @Subscription(() => Author, {
    name: 'TestSubscription',
    filter: (...arg) => {
      console.log(arg)
      return true
    },
  })
  authorAdded() {
    console.log(213)
    return pubSub.asyncIterator('authorAdded')
  }
}
