import { Module } from '@nestjs/common'
import { UserService } from 'src/service/user/user.service'
import { UserController } from 'src/controllers/user/user.controller'

@Module({
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
