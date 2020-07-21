import { Module, OnModuleInit } from '@nestjs/common'
import { APP_EMAIL_TRANSPORT } from 'src/utils/constant'
import { TransportProvider } from './transport.provider'
import { ConfigService } from '@nestjs/config'
import { EmailService } from 'src/service/email/email.service'

@Module({
  providers: [
    {
      provide: APP_EMAIL_TRANSPORT,
      useFactory: (configService: ConfigService) => {
        return new TransportProvider(configService).get()
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
