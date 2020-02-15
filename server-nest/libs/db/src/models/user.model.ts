import { prop, modelOptions } from '@typegoose/typegoose';

import {} from '@nestjs/swagger'
@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class User {
  
  @prop()
  username: string;
  @prop()
  password: string;
}
