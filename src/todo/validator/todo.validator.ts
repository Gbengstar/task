import * as Joi from 'joi';
import { CreateTodoDto, TodoStatusEnum } from '../dto/todo.dto';

export const createTodoValidator = Joi.object<CreateTodoDto>({
  item: Joi.string().required(),
  description: Joi.string(),
});

export const updateTodoValidator = Joi.object<CreateTodoDto>({
  item: Joi.string(),
  description: Joi.string(),
});

export const queryStringValidator = Joi.object({
  ids: Joi.array().items(),
});

export const statusValidator = Joi.object({
  status: Joi.string().valid(...Object.values(TodoStatusEnum)),
});
