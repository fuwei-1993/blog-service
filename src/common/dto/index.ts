import { ApiPropertyOptional } from '@nestjs/swagger'

export class SuccessResDto implements NResponse.Success {
  @ApiPropertyOptional()
  code: 200
  @ApiPropertyOptional()
  success: true
}
