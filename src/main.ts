import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { TimeoutInterceptor } from './interceptors/timeout.interceptor'
import { HttpExceptionFilter } from './filters/http-exception.filter'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { TransformInterceptor } from './interceptors/transform.interceptor'
import { ValidationPipe } from './pipes/validation.pipe'
import configuration from './config/configuration'
import * as helmet from 'helmet'
import * as rateLimit from 'express-rate-limit'

const { port, prefix } = configuration()

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true })

  app.useGlobalInterceptors(
    new TimeoutInterceptor(),
    new TransformInterceptor(),
  )
  app.useGlobalFilters(new HttpExceptionFilter())
  app.useGlobalPipes(new ValidationPipe())
  app.setGlobalPrefix(prefix)

  app.use(helmet()) // http header 安全

  app.use(
    // 速率限制来保护应用程序免受暴力攻击
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    }),
  )

  const options = new DocumentBuilder()
    .setTitle('Blog Example')
    .setDescription('The blog API description')
    .setVersion('0.0.1')
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      in: 'header',
      name: 'accessToken',
    })
    .build()

  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('docs', app, document)

  await app.listen(port)
}

bootstrap()
