import { Module } from '@nestjs/common'
import { AppService } from './app.service'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import entitiesPath from './config/entities.config'
import database from './config/database.config'
import { rootModules } from './modules'
import { APP_INTERCEPTOR } from '@nestjs/core'
import { LoggingInterceptor } from './interceptors/logging.interceptor'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [
        ConfigModule.forRoot({
          load: [database, entitiesPath],
        }),
      ],
      useFactory: async (config: ConfigService) => {
        return {
          ...config.get<object>('database'),
          entities: config.get<string[]>('entitiesPath'),
          synchronize: true,
        }
      },
      inject: [ConfigService],
    }),
    ...rootModules,
  ],
  controllers: [],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
  exports: [AppService],
})
export class AppModule {}
