import { Module } from '@nestjs/common'
import { UserModule } from '../user/user.module'
import { AuthService } from 'src/service/auth/auth.service'
import { LocalStrategy } from './strategies/local.strategy'
import { JwtModule } from '@nestjs/jwt'
import { jwtConstants } from 'src/utils/constant'
import { JwtStrategy } from './strategies/jwt.strategy'

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {
        expiresIn: '180s',
      },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
