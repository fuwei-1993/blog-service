import { Theme } from '../interface/theme.interface'
import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

type Create = Pick<Theme, 'name' | 'description'>

export class ThemeCreateDto implements Create {
  @IsString({
    message: '主题名称必须是字符串',
  })
  @IsNotEmpty({
    message: '主题名称不能为空',
  })
  name: string

  @IsString({
    message: '描述信息必须是字符串',
  })
  @IsOptional()
  description?: string
}
