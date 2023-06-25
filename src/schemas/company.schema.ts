import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CompanyDocument = HydratedDocument<Company>;

@Schema()
export class Company {
  @Prop({ required: true })
  uuid: string;

  @Prop()
  name: string;

  @Prop()
  ceo: string;

  @Prop()
  address: string;

  @Prop()
  inceptionDate: string;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
