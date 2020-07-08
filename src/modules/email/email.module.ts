import { Module, OnModuleInit } from '@nestjs/common'
import { APP_EMAIL_TRANSPORT } from 'src/utils/constant'
import { Transport } from './transport'
import { ConfigModule, ConfigService } from '@nestjs/config'
import emailConfig from 'src/config/email.config'
import { EmailService } from 'src/service/email/email.service'

@Module({
  imports: [ConfigModule.forFeature(emailConfig)],
  providers: [
    {
      provide: APP_EMAIL_TRANSPORT,
      useFactory: (configService: ConfigService) => {
        return new Transport(configService).get()
      },
      inject: [ConfigService],
    },
    EmailService,
  ],
  exports: [EmailService],
})
export class EmailModule implements OnModuleInit {
  constructor(private readonly emailService: EmailService) {}

  async onModuleInit() {
    await this.emailService.verifyConnection()
  }
}
