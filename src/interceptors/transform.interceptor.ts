import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpStatus,
} from '@nestjs/common'
import { map } from 'rxjs/operators'
import { classToPlain } from 'class-transformer'
// import { Response } from 'express'

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    // todo const response = context.switchToHttp().getResponse<Response>()
    return next.handle().pipe(
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
