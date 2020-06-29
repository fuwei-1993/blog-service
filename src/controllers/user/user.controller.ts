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
import { UserService } from 'src/service/user/user.service'

@ApiTags('用户信息')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  @ApiBody({
    type: UserCreateDto,
    description: '创建用户',
  })
  @ApiOkResponse({
    type: SuccessResDto,
  })
  async create(@Body() user: UserCreateDto) {
    await this.userService.create(user)
  }

  @Get('find')
  @ApiOkResponse({
    type: [UserResDto],
    description: '所有用户信息',
  })
  async find(): Promise<UserResDto[]> {
    return await this.userService.findAll()
  }

  @Get('find/:id')
  @ApiOkResponse({
    type: UserResDto,
    description: '用户信息',
  })
  async findOneById(@Param('id') id: string): Promise<UserResDto> {
    return await this.userService.findOneById(id)
  }

  @Patch(':id')
  @ApiOkResponse({
    type: SuccessResDto,
  })
  @ApiBody({
    type: UserUpdateDto,
    description: '更新用户',
  })
  async update(@Param('id') id: string, @Body() user: UserUpdateDto) {
    await this.userService.update(id, user)
  }

  @Delete(':id')
  @ApiOkResponse({
    type: SuccessResDto,
  })
  async delete(@Param('id') id: string) {
    await this.userService.deleteOneById(id)
  }
}
