import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './models/user.model';

const model = TypegooseModule.forFeature([User]);
@Global()
@Module({
  // 连接数据库
  imports: [
    TypegooseModule.forRootAsync({
      useFactory() {
        return {
          uri: process.env.DB,
          useCreateIndex: true,
          useFindAndModify: false,
          useNewUrlParser: true,
          useUnifiedTopology: true,
        };
      },
    }),

    //   TypegooseModule.forRoot('mongodb://localhost/yayxs', {
    //   useCreateIndex:true,
    //   useFindAndModify:false,
    //   useNewUrlParser:true,
    //   useUnifiedTopology:true
    // }),

    model,
  ],
  providers: [DbService],
  exports: [DbService, model],
})
export class DbModule {}
