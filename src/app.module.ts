import { Module } from '@nestjs/common'
import { AppService } from './app.service'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'

import { entitiesPath } from './config/entities.config'
import database from './config/database.config'
import { AdminModule } from './modules/admin/admin.module'
import { BlogModule } from './modules/blog/blog.module'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [
        ConfigModule.forRoot({
          load: [database],
        }),
      ],
      useFactory: async (config: ConfigService) => {
        return {
          ...config.get('database'),
          entities: [entitiesPath],
          synchronize: true,
        }
      },
      inject: [ConfigService],
    }),
    AdminModule,
    BlogModule,
  ],
  controllers: [],
  providers: [AppService],
  exports: [AppService],
})
export class AppModule {}
