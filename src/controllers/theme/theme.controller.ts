import { ThemeService } from './../../service/theme/theme.service'
import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { ApiBody } from '@nestjs/swagger'
import { ThemeCreateDto } from './dto/theme-create.dto'
import { ThemeSwitchDto } from './dto/theme-switch.dto'

@Controller('theme')
export class ThemeController {
  constructor(private readonly themeService: ThemeService) {}

  @Post('create')
  @ApiBody({
    type: ThemeCreateDto,
  })
  async createTheme(@Body() theme: ThemeCreateDto) {
    await this.themeService.createTheme(theme)
  }

  @Post('switch')
  @ApiBody({
    type: ThemeSwitchDto,
  })
  async switchTheme(@Body() switchTheme: ThemeSwitchDto) {
    await this.themeService.switchTheme(switchTheme)
    return await this.themeService.findThemes()
  }

  @Get(':name')
  async getTheme(@Param('name') name: string) {
    return await this.themeService.getCssByAppName(name)
  }
}
