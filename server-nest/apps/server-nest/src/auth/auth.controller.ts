import { Controller, Post, Body, Get, UseGuards, Req } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { User } from '@libs/db/models/user.model';
import { ReturnModelType, DocumentType } from '@typegoose/typegoose';
import { AuthGuard } from '@nestjs/passport';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { CurrentUser } from './current.user';

@ApiTags('用户')
@Controller('auth')
export class AuthController {
  constructor(
    private jwtService: JwtService,
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
  @UseGuards(AuthGuard('local'))
  async login(@Body() dto: LoginDto, @Req() req) {
    return {
      token: this.jwtService.sign(String(req.user._id)),
    };
  }
  @ApiOperation({ summary: '用户信息' })
  @UseGuards(AuthGuard('jwt'))
  @Get('user')
  @ApiBearerAuth()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async user(@Request() req) {
    return req.user;
  }
}
