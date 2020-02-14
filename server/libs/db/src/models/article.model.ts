import { prop, modelOptions } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Article {
  @ApiProperty({ description: '文章标题', example: '基于nest开发一套简易博客api' })
  @prop()
  name: string;
  @ApiProperty({
    description: '文章描述',
    example: '',
  })
  @prop()
  desc: string;

  @ApiProperty({
    description: '文章内容',
    example: '',
  })
  @prop()
  con: string;
}
