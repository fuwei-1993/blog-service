import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsOptional,
  IsMobilePhone,
  IsNumberString,
} from 'class-validator'

export class UserCreateDto {
  @ApiProperty({
    description: '用户账号',
  })
  @IsString({ message: '必须为字符串' })
  @IsNotEmpty({ message: '不能为空' })
  readonly username: string

  @ApiProperty({
    description: '用户密码',
  })
  @IsString({ message: '必须为字符串' })
  @IsNotEmpty({ message: '不能为空' })
  readonly password: string

  @ApiPropertyOptional({
    description: '用户手机',
  })
  @IsNumberString()
  @IsMobilePhone('zh-CN')
  @IsOptional()
  readonly mobile?: string

  @ApiPropertyOptional({
    description: '用户邮箱',
  })
  @IsString({ message: '必须为字符串' })
  @IsEmail()
  @IsOptional()
  readonly email?: string
}
