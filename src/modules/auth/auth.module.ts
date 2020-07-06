import { Module } from '@nestjs/common'
import { UserModule } from '../admin/user/user.module'
import { AuthService } from 'src/service/auth/auth.service'
import { LocalStrategy } from './strategies/local.strategy'
import { JwtModule } from '@nestjs/jwt'
import { jwtConstants } from 'src/utils/constant'
import { JwtStrategy } from './strategies/jwt.strategy'
import { AuthController } from 'src/controllers/auth/auth.controller'
import { EmailModule } from '../email/email.module'

@Module({
  imports: [
    UserModule,
    EmailModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {
        expiresIn: '960s',
      },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
