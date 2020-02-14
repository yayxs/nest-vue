import { prop, modelOptions, arrayProp, Ref } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';

import {Article } from './article.model'
@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Column {
  @ApiProperty({ description: '专栏', example: 'TypeScript' })
  @prop()
  name: string;
  @ApiProperty({
    description: '封面大图',
    example: 'https://yayxs.github.io/head.jpg',
  })
  @prop()
  cover: string;

  @arrayProp({itemsRef:"Article"})
  article:Ref<Article>[]
}
