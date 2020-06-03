import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'

import { entitiesPath } from './config/entities.config'
import database from './config/database.config'

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
