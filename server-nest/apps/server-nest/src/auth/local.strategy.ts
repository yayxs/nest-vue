// 本地策略

import { IStrategyOptions, Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { User } from '@libs/db/models/user.model';
import { BadRequestException } from '@nestjs/common';
import { compareSync } from 'bcryptjs';
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(
    @InjectModel(User) private userModel: ReturnModelType<typeof User>,
  ) {
    super({
      usernameField: 'username',
      passwordField: 'password',
    } as IStrategyOptions);
  }

  async validate(username: string, password: string) {
    const user = await this.userModel.findOne({ username }).select('+password');
    // 用户不存在
    if (!user) {
      throw new BadRequestException('用户名不正确');
    }
    // 判断密码是否正确 通过jwt
    if (!compareSync(password, user.password)) {
      throw new BadRequestException('密码不正确');
    }

    return user;
  }
}
