import { Company } from '../../schemas/company.schema';

export class CreateTeamDto {
      readonly uuid: string;
      readonly teamLeadName: string;
      readonly companyId: Company;
      readonly address: string;
      readonly inceptionDate: string;
}
