import { PartialType } from '@nestjs/swagger';
import { CreateCompanyDto } from './create-company.dto';

export class UpdateTeamDto extends PartialType(CreateCompanyDto) {}
