import { Module } from '@nestjs/common'
import { UserService } from 'src/service/user/user.service'
import { UserController } from 'src/controllers/user/user.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from 'src/entities/user.entity'

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
