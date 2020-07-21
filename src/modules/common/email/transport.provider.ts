import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import { Transporter, createTransport } from 'nodemailer'
import smtpTransport from 'nodemailer-smtp-transport'

@Injectable()
export class TransportProvider {
  private readonly transporter: Transporter
  constructor(private readonly configService: ConfigService) {
    this.transporter = createTransport(
      smtpTransport(this.configService.get<object>('email')),
    )
  }

  get() {
    return this.transporter
  }
}
