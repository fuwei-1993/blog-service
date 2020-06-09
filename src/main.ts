import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { TimeoutInterceptor } from './interceptors/timeout.interceptor'
import { HttpExceptionFilter } from './filters/http-exception.filter'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalInterceptors(new TimeoutInterceptor())
  app.useGlobalFilters(new HttpExceptionFilter())

  const options = new DocumentBuilder()
    .setTitle('Blog Example')
    .setDescription('The blog API description')
    .setVersion('0.0.1')
    .addTag('blog')
    .addBearerAuth({ type: 'apiKey', in: 'header', name: 'token' })
    .build()

  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('docs', app, document)

  await app.listen(3000)
}
bootstrap()
