import {
  Injectable,
  Inject,
  InternalServerErrorException,
} from '@nestjs/common'
import { APP_EMAIL_TRANSPORT } from 'src/utils/constant'
import { Transporter, SendMailOptions } from 'nodemailer'

@Injectable()
export class EmailService {
  isVerified: boolean
  constructor(
    @Inject(APP_EMAIL_TRANSPORT) private readonly transporter: Transporter,
  ) {}

  async verifyConnection() {
    // this.isVerified = await this.transporter.verify() // todo ...
  }

  async sendMail(mailOptions: SendMailOptions) {
    if (!this.isVerified) {
      throw new InternalServerErrorException({ message: '邮箱验证失败' })
    }

    const info = await this.transporter.sendMail(mailOptions)

    if (!info.messageId) {
      throw new InternalServerErrorException({ message: '邮件发送失败' })
    }
    console.log('Message sent: %s', info.messageId)
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  }
}

// {
//   from: '"Fred Foo 👻" <454575238@qq.com>',
//   subject: 'Hello ✔',
//   to:
//     'chenmingye2010@qq.com, 153846000@qq.com, 153846000@qq.com, 996449707@qq.com, tijiaoba@163.com',
//   text: '涛哥牛逼！',
//   html: '<b>涛哥牛逼！</b>',
// }
