import { UtilsModule } from './../libs/utils/src/utils.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    UtilsModule,
    TodoModule,
  ],
})
export class AppModule {}
