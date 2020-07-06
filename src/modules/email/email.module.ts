import { Module } from '@nestjs/common'
import { APP_EMAIL_TRANSPORT } from 'src/utils/constant'
import { Transport } from './transport'
import { ConfigModule } from '@nestjs/config'
import emailConfig from 'src/config/email.config'
import { EmailService } from 'src/service/email/email.service'

@Module({
  imports: [ConfigModule.forFeature(emailConfig)],
  providers: [
    {
      provide: APP_EMAIL_TRANSPORT,
      useClass: Transport,
    },
    EmailService,
  ],
  exports: [EmailService],
})
export class EmailModule {}
