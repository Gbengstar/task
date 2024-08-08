import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from '../model/todo.model';
import { FilterQuery, Model } from 'mongoose';
import { CreateTodoDto, TodoStatusEnum, UpdateTodoDto } from '../dto/todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo.name) private readonly TodoModel: Model<Todo>,
  ) {}

  find(filter: FilterQuery<Todo>) {
    return this.TodoModel.find(filter).sort({ createdAt: -1 });
  }

  create(data: CreateTodoDto) {
    return this.TodoModel.create({ status: TodoStatusEnum.ACTIVE, ...data });
  }

  async update(id: string, data: UpdateTodoDto) {
    const todo = await this.TodoModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    if (todo) return todo;
    throw new NotFoundException('task not found');
  }

  async updateMany(ids: string[], data: Partial<Todo>) {
    return this.TodoModel.updateMany({ _id: { $in: ids } }, data);
  }

  deleteMany(ids: string[]) {
    return this.TodoModel.deleteMany({ _id: { $in: ids } });
  }
}
