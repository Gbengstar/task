import { Todo } from '../model/todo.model';

export enum TodoStatusEnum {
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
}

export type CreateTodoDto = Pick<Todo, 'item' | 'description'>;
export type UpdateTodoDto = Partial<CreateTodoDto>;
