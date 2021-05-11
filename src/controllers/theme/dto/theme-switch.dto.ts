import { IsNotEmpty, IsString } from 'class-validator'
export class ThemeSwitchDto {
  @IsString({
    message: '应用名必须是字符串',
  })
  @IsNotEmpty({
    message: '应用名不能为空',
  })
  appName: string

  @IsString({
    message: '主题名必须是字符串',
  })
  @IsNotEmpty({
    message: '主题名不能为空',
  })
  themeName: string
}
