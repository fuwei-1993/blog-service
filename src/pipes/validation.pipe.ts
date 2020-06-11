import {
  Injectable,
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
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
    console.log(plainToClass(metatype, value), errors)

    if (errors.length > 0) {
      throw new BadRequestException('哈哈')
    }
    return value
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Object, Number, Array]
    return !types.includes(metatype)
  }
}
