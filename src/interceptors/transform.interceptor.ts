import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpStatus,
} from '@nestjs/common'
import { map } from 'rxjs/operators'
import { classToPlain } from 'class-transformer'
import { isGraphql } from 'src/utils'

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    return isGraphql(context)
      ? next.handle()
      : next.handle().pipe(
          map((data: any) => ({
            result: {
              data: classToPlain(data),
            },
            code: HttpStatus.OK,
            success: true,
          })),
        )
  }
}
