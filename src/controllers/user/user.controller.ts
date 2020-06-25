import {
  Controller,
  Post,
  Get,
  Param,
  Patch,
  Delete,
  Body,
} from '@nestjs/common'
import { ApiOkResponse, ApiBody, ApiTags } from '@nestjs/swagger'
import { UserResDto } from './dto/user-res.dto'
import { UserCreateDto } from './dto/user-create.dto'
import { SuccessResDto } from 'src/common/dto'
import { UserUpdateDto } from './dto/user-update.dto'

@ApiTags('用户信息')
@Controller('user')
export class UserController {
  @Post('create')
  @ApiBody({
    type: UserCreateDto,
    description: '创建用户',
  })
  @ApiOkResponse({
    type: SuccessResDto,
  })
  create(@Body() user: UserCreateDto) {
    return user
  }

  @Get('find')
  @ApiOkResponse({
    type: [UserResDto],
    description: '所有用户信息',
  })
  find() {}

  @Get('find/:id')
  @ApiOkResponse({
    type: UserResDto,
    description: '用户信息',
  })
  findOneById(@Param('id') id: string) {}

  @Patch(':id')
  @ApiOkResponse({
    type: SuccessResDto,
  })
  @ApiBody({
    type: UserUpdateDto,
    description: '更新用户',
  })
  update(@Param('id') id: string) {}

  @Delete(':id')
  @ApiOkResponse({
    type: SuccessResDto,
  })
  delete(@Param('id') id: string) {}
}
