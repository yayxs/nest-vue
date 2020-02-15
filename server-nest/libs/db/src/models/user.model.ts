import { prop, modelOptions } from '@typegoose/typegoose';

import { ApiProperty } from '@nestjs/swagger';

import { hashSync } from 'bcryptjs';
@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class User {
  @ApiProperty({ description: '用户名' })
  @prop()
  username: string;
  @ApiProperty({ description: '密码' })
  @prop({
    get(val){
      return val
    },
    // 密码散列
    set(val) {
      return val ? hashSync(val) : val;
    },
  })
  password: string;
}
