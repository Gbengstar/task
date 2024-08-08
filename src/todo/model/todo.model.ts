import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { TodoStatusEnum } from '../dto/todo.dto';

@Schema({ timestamps: true })
export class Todo {
  @Prop()
  item: string;

  @Prop({ default: null })
  description: string;

  @Prop({ type: String })
  status: TodoStatusEnum;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
