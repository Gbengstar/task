import { Module } from '@nestjs/common';
import { TodoService } from './service/todo.service';
import { TodoController } from './controller/todo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Todo, TodoSchema } from './model/todo.model';

@Module({
  controllers: [TodoController],
  providers: [TodoService],
  imports: [
    MongooseModule.forFeatureAsync([
      { name: Todo.name, useFactory: () => TodoSchema },
    ]),
  ],
})
export class TodoModule {}
