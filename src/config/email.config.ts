export default () => ({
  emailConfig: {
    host: process.env.EMAIL_HOST || 'smtp.qq.com',
    port: process.env.EMAIL_PORT || 25,
    secure: false,
    auth: {
      user: process.env.EMAIL_ACCOUNT || '454575238@qq.com',
      pass: process.env.EMAIL_PASSWORD || 'jpdvgrduuerxbgbh',
    },
  },
})
