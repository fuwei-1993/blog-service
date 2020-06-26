import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsOptional,
  IsMobilePhone,
} from 'class-validator'

export class UserCreateDto {
  @ApiProperty({
    description: '用户账号',
  })
  @IsString()
  @IsNotEmpty()
  readonly username: string

  @ApiProperty({
    description: '用户密码',
  })
  @IsString()
  @IsNotEmpty()
  readonly password: string

  @ApiPropertyOptional({
    description: '用户手机',
  })
  @IsString()
  @IsMobilePhone('zh-CN')
  @IsOptional()
  readonly mobile?: string

  @ApiPropertyOptional({
    description: '用户邮箱',
  })
  @IsString()
  @IsEmail()
  @IsOptional()
  readonly email?: string
}
