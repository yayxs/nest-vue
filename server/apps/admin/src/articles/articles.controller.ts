import { Controller } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Article } from '@libs/db/models/article.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud';


@Crud({
    model:Article
})
@ApiTags('文章')
@Controller('articles')
export class ArticlesController {
    constructor(@InjectModel(Article) private readonly model:ReturnModelType<typeof Article>){

    }
}
