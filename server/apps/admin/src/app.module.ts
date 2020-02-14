import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@libs/db';
import { UsersModule } from './admin/users/users.module';
import { UsersController } from './users/users.controller';
import { ColumnsModule } from './columns/columns.module';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [
    DbModule,
    UsersModule,
    ColumnsModule,
    ArticlesModule,
  ],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
