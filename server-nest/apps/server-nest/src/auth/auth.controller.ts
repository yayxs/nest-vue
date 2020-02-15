import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { User } from '@libs/db/models/user.model';
import { ReturnModelType } from '@typegoose/typegoose';

export class RegisterDto {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
}

@ApiTags('用户')
@Controller('auth')
export class AuthController {
  constructor(
    @InjectModel(User) private userModel: ReturnModelType<typeof User>,
  ) {}

  @ApiOperation({ summary: '注册' })
  @Post('register')
  async register(@Body() dto: RegisterDto) {
    const { username, password } = dto;
    const user = await this.userModel.create({
      username,
      password,
    });

    return user;
  }

  @ApiOperation({ summary: '登录' })
  @Post('login')
  async login(@Body() dto) {
    return dto;
  }
  @ApiOperation({ summary: '用户信息' })
  @Get('user')
  async user() {
    return {};
  }
}
