import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiTags, ApiProperty, ApiOperation } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { User } from '@libs/db/models/user.model';
import { Crud } from 'nestjs-mongoose-crud';

export class RegisterDto {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
}



@Controller('auth')
@ApiTags('用户')
export class AuthController {
  // constructor(
  //   @InjectModel(User) private  userModel: ReturnModelType<typeof User>,
  // ) {}

  @Post('register')
  @ApiOperation({ summary: '注册' })
  async register(@Body() dto: RegisterDto) {
    const { username, password } = dto;
    // const user = await this.userModel.create({
    //   username,
    //   password,
    // });
    return {};
  }
  @ApiOperation({ summary: '登录' })
  @Post('login')
  async login(@Body() dto) {
    return dto;
  }

  @ApiOperation({ summary: '获取用户信息' })
  @Get('user')
  async getUser() {
    return {};
  }
}
