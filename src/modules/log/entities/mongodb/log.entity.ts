import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Log as LogTemplate } from '../log.entity';
import * as mongoose from 'mongoose';

export type LogDocument = Log & Document;

@Schema()
export class Log extends LogTemplate {
  @Prop()
  title: string;

  @Prop({ type: mongoose.Schema.Types.Mixed })
  data: any;
}

export const LogSchema = SchemaFactory.createForClass(Log);
