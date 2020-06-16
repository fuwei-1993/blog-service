import {
  Injectable,
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
  Logger,
} from '@nestjs/common'
import { validate } from 'class-validator'
import { plainToClass } from 'class-transformer'

@Injectable()
export class ValidationPipe implements PipeTransform {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value
    }
    const errors = await validate(plainToClass(metatype, value))

    if (errors.length > 0) {
      Logger.log(errors, '请求参数错误')
      throw new BadRequestException({ description: '请求参数错误' })
    }
    return value
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Object, Number, Array]
    return !types.includes(metatype)
  }
}
