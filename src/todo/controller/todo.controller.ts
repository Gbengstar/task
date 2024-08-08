import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TodoService } from '../service/todo.service';
import { CreateTodoDto, UpdateTodoDto } from '../dto/todo.dto';
import {
  createTodoValidator,
  queryStringValidator,
  statusValidator,
  updateTodoValidator,
} from '../validator/todo.validator';
import { ObjectValidationPipe } from '../../../libs/utils/src/pipe/validation.pipe';

@Controller('tasks')
export class TodoController {
  constructor(private readonly appService: TodoService) {}

  @Get()
  allTodo() {
    return this.appService.find({});
  }

  @Post()
  createTodo(
    @Body(new ObjectValidationPipe(createTodoValidator)) todo: CreateTodoDto,
  ) {
    return this.appService.create(todo);
  }

  @Patch('status')
  completeTodo(
    @Body(new ObjectValidationPipe(statusValidator)) { status }: any,
    @Query(new ObjectValidationPipe(queryStringValidator))
    { ids }: { ids: string[] },
  ) {
    return this.appService.updateMany(ids, { status });
  }

  @Patch(':id')
  updateTodo(
    @Body(new ObjectValidationPipe(updateTodoValidator)) todo: UpdateTodoDto,
    @Param('id') id: string,
  ) {
    return this.appService.update(id, todo);
  }

  @Delete()
  deleteManyTodo(
    @Query(new ObjectValidationPipe(queryStringValidator))
    { ids }: { ids: string[] },
  ) {
    return this.appService.deleteMany(ids);
  }
}
