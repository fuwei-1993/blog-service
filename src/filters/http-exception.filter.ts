import {
  Catch,
  ExceptionFilter,
  HttpException,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common'
import { Request, Response } from 'express'

//HttpException 参数是对应使用 HttpException 的 error
//空则为任何没有处理和处理过的错误

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const context = host.switchToHttp()
    const request = context.getRequest<Request>()
    const response = context.getResponse<Response>()

    console.log(exception)

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR

    const errorMsg = exception.getResponse
      ? exception.getResponse()
      : exception.message

    const errorResponse = {
      method: request.method,
      code: status,
      path: request.url,
      timestamp: new Date().toLocaleDateString(),
      errorMsg,
      success: false,
      result: {
        data: null,
      },
    }

    response
      .header('Content-Type', 'application/json; charset=utf-8')
      .status(HttpStatus.OK)
      .json(errorResponse)
  }
}
