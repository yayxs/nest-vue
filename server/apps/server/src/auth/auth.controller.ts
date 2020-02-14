import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiTags, ApiProperty, ApiOperation } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
}

@Controller('auth')
@ApiTags('用户')
export class AuthController {
  @Post('register')
  @ApiOperation({summary:'注册'})
  async register(@Body() dto:RegisterDto) {
    const {username,password} =dto
    return {
      username,
      password
    };
  }
  @Post('login')
  async login(@Body() dto) {
    return dto;
  }
  @Get('getUser')
  async getUser() {
    return {};
  }
}
