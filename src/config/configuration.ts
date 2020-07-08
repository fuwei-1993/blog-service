export default () => ({
  port: parseInt(process.env.SERVER_PORT, 10) || 3000,
  env: process.env,
})
