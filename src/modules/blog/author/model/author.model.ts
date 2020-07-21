import { ObjectType, Field, Int } from '@nestjs/graphql'

@ObjectType({ description: '作者模块' })
export class Author {
  @Field(() => Int)
  id: number

  @Field({ nullable: true })
  firstName: string

  @Field({ nullable: true })
  lastName: string
}
