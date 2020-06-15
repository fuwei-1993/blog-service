import { ApiProperty } from '@nestjs/swagger'

export class SuccessResDto implements NResponse.Success {
  @ApiProperty({ required: false })
  code: 200
  @ApiProperty({ required: false })
  success: true
}
