import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import { Transporter, createTransport } from 'nodemailer'
import * as smtpTransport from 'nodemailer-smtp-transport'

@Injectable()
export class Transport {
  private readonly config: Transporter
  constructor(private readonly configService: ConfigService) {
    this.config = createTransport(
      smtpTransport(this.configService.get<object>('emailConfig')),
    )
  }

  get() {
    return this.config
  }
}
