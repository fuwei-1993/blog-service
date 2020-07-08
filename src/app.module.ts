import { Module } from '@nestjs/common'
import { AppService } from './app.service'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { rootModules } from './modules'
import { APP_INTERCEPTOR } from '@nestjs/core'
import { LoggingInterceptor } from './interceptors/logging.interceptor'
import { envConfig } from './config'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [
        ConfigModule.forRoot({
          load: envConfig,
          isGlobal: true,
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
