export default () => ({
  port: parseInt(process.env.SERVICE_PORT, 10) || 3000,
  env: process.env,
})
