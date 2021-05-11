import { Theme } from 'src/entities/theme.entity'
import { BadRequestException, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { createQueryBuilder, Repository } from 'typeorm'
import { Application } from 'src/entities/application.entity'

@Injectable()
export class ThemeService {
  constructor(
    @InjectRepository(Theme)
    private readonly themeRepository: Repository<Theme>,
    @InjectRepository(Application)
    private readonly appRepository: Repository<Application>,
  ) {}

  async findThemes() {
    return await this.themeRepository
      .createQueryBuilder('theme')
      .skip(0)
      .take(10)
      .leftJoinAndSelect('theme.applications', 'application')
      .getMany()
  }

  async findApplications() {
    return await this.appRepository.find({
      skip: 1,
      take: 10,
    })
  }

  async getThemeByName(name: string) {
    return await createQueryBuilder<Theme>('theme')
      .where('theme.name = :name', {
        name,
      })
      .getOne()
  }

  async getAppByName(name: string) {
    return await this.appRepository
      .createQueryBuilder('application')
      .where('application.name = :name', {
        name,
      })
      .innerJoinAndSelect('application.theme', 'theme')
      .getOne()
  }

  async createTheme(themeDto) {
    const isExist = await this.getThemeByName(themeDto.name)
    if (isExist) {
      throw new BadRequestException({ message: '该主题已存在' })
    }

    // const id = await xxx.save(themeDto.themeFile)
    // id 存进去

    const themeEntity = this.themeRepository.create({
      ...themeDto,
      themeFileId: 1,
    })
    return await this.themeRepository.save(themeEntity)
  }

  async switchTheme(switchDto) {
    const currentTheme = await this.getThemeByName(switchDto.themeName)

    if (!currentTheme) {
      throw new BadRequestException({ message: '该主题不存在' })
    }

    const currentApp = await this.getAppByName(switchDto.appName)

    const app = currentApp ?? { name: switchDto.appName }

    const appEntity = await this.appRepository.create({
      ...app,
      theme: currentTheme,
    })

    if (currentApp) {
      return await this.appRepository.update({ id: appEntity.id }, appEntity)
    }

    return await this.appRepository.save(appEntity)
  }

  async getCssByAppName(name) {
    const currentApp = await this.getAppByName(name)

    let themeFileId
    if (currentApp) {
      themeFileId = currentApp.theme.themeFileId
    } else {
      const theme = await this.getThemeByName('1')
      themeFileId = theme.themeFileId
    }

    // 需要根据themeFileId查主题对应的文件

    return await Promise.resolve(themeFileId)
  }
}
