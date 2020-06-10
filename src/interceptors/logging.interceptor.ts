import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common'
import { tap } from 'rxjs/operators'

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    const prevDate = Date.now()
    const request = context.switchToHttp().getRequest()
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
