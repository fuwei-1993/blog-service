import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class LoginDto {
  @ApiProperty({
    description: '用户名',
  })
  @IsNotEmpty({ message: '不能为空' })
  @IsString({ message: '必须为字符串' })
  username: string

  @ApiProperty({
    description: '密码',
  })
  @IsNotEmpty({ message: '不能为空' })
  @IsString({ message: '必须为字符串' })
  password: string
}
