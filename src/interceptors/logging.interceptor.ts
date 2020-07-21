import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common'
import { tap } from 'rxjs/operators'
import { isGraphql } from 'src/utils'

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    let request = context.switchToHttp().getRequest()

    if (isGraphql(context)) {
      request = {
        method: 'graphql',
        url: '/graphql',
      }
    }

    const prevDate = Date.now()
    const { method, url } = request
    const targetClass = context.getClass().name

    return next.handle().pipe(
      tap(() => {
        Logger.log(
          ` {${url}, ${method}} costTime: ${Date.now() - prevDate} ms`,
          targetClass,
        )
      }),
    )
  }
}
