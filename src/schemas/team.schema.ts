import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Company } from './company.schema';

export type TeamDocument = HydratedDocument<Team>;

@Schema()
export class Team {
  @Prop({ required: true })
  uuid: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Company' })
  companyId: Company;

  @Prop()
  teamLeadName: string;

  @Prop()
  address: string;

  @Prop()
  inceptionDate: string;
}

export const TeamSchema = SchemaFactory.createForClass(Team);
