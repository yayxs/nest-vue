import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule} from 'nestjs-typegoose'
import { User } from './models/user.model';
import { Column } from './models/column.mode';
import { Article } from './models/article.model';

const model = TypegooseModule.forFeature([
  User,
  Column,
  Article
])

@Global()
@Module({
  imports:[
    TypegooseModule.forRoot('mongodb://localhost/blog',{
      useNewUrlParser:true,
      useCreateIndex:true,
      useUnifiedTopology:true,
      useFindAndModify:false
    }),
    model
  ],
  providers: [DbService],
  exports: [DbService,model],
})
export class DbModule {}
