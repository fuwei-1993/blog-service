import { ThemeService } from './../../service/theme/theme.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'
import { Theme } from 'src/entities/theme.entity'
import { Application } from 'src/entities/application.entity'
import { ThemeController } from 'src/controllers/theme/theme.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Theme, Application])],
  providers: [ThemeService],
  controllers: [ThemeController],
  exports: [ThemeService],
})
export class ThemeModule {}
