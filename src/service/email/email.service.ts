import { Injectable, Inject } from '@nestjs/common'
import { APP_EMAIL_TRANSPORT } from 'src/utils/constant'

@Injectable()
export class EmailService {
  constructor(@Inject(APP_EMAIL_TRANSPORT) private readonly transporter) {}

  test() {
    console.log(this.transporter)
  }
}
