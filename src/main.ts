import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { TimeoutInterceptor } from './interceptors/timeout.interceptor'
import { HttpExceptionFilter } from './filter/http-exception.filter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalInterceptors(new TimeoutInterceptor())
  app.useGlobalFilters(new HttpExceptionFilter())

  await app.listen(3000)
}
bootstrap()
