import { ApiPropertyOptional } from '@nestjs/swagger'
import { HttpStatus } from '@nestjs/common'

export class SuccessResDto implements NResponse.Success {
  @ApiPropertyOptional()
  code: HttpStatus.OK
  @ApiPropertyOptional()
  success: true
}
