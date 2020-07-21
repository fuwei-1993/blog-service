import { Module } from '@nestjs/common'
import { EmailModule } from '../common/email/email.module'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'
import { AuthorsResolver } from './author/model/author.resolver'
@Module({
  imports: [
    EmailModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema/schema.gql'),
      sortSchema: true,
    }),
  ],
  providers: [AuthorsResolver],
})
export class BlogModule {}
