import { Injectable, Inject } from '@nestjs/common'
import { APP_EMAIL_TRANSPORT } from 'src/utils/constant'
import { Transporter } from 'nodemailer'

@Injectable()
export class EmailService {
  constructor(
    @Inject(APP_EMAIL_TRANSPORT) private readonly transporter: Transporter,
  ) {}

  test() {
    // this.transporter.verify((err, success) => {
    //   console.log(err, success)
    // })
    this.sendMail()
  }

  async sendMail() {
    const info = await this.transporter.sendMail({
      from: '"Fred Foo 👻" <454575238@qq.com>',
      subject: 'Hello ✔',
      to:
        'chenmingye2010@qq.com, 153846000@qq.com, 153846000@qq.com, 996449707@qq.com, tijiaoba@163.com',
      text: '涛哥牛逼！',
      html: '<b>涛哥牛逼！</b>',
    })

    console.log('Message sent: %s', info.messageId)
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  }
}
