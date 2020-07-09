import { IUser } from '../interface/user.interface'
import { Transform, Exclude, Expose } from 'class-transformer'
import { ApiPropertyOptional } from '@nestjs/swagger'

export class UserResDto implements IUser {
  @Exclude()
  id: number

  @ApiPropertyOptional({
    name: 'id',
  })
  @Expose({ name: 'id' })
  uuid: string

  @ApiPropertyOptional()
  username: string

  // @Exclude()
  // password: string

  @ApiPropertyOptional()
  mobile: string

  @ApiPropertyOptional()
  email: string

  @ApiPropertyOptional()
  @Transform(date => +new Date(date))
  createdAt: Date

  @ApiPropertyOptional()
  @Transform(date => +new Date(date))
  updatedAt: Date

  @ApiPropertyOptional()
  roles: string[]
}
