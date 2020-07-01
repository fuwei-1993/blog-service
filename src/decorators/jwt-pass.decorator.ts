import { applyDecorators, SetMetadata } from '@nestjs/common'
import { jwtConstants } from 'src/utils/constant'

export function JwtPass() {
  return applyDecorators(SetMetadata(jwtConstants.jwtPass, true))
}
