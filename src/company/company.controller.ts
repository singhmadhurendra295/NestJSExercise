import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { Company } from '../schemas/company.schema';
import { CreateCompanyDto } from './dto/create-company.dto';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) { }

  @Get()
  async getAllCompanies(): Promise<Company[]> {
    return this.companyService.findAll();
  }

  @Post()
  async createCompany(
    @Body()
    company: CreateCompanyDto,
  ): Promise<Company> {
    return this.companyService.create(company);
  }

  @Get(':id')
  async getCompany(
    @Param('id')
    id: string,
  ): Promise<Company> {
    return this.companyService.findById(id);
  }

  @Get('?search=')
  async searchCompany(
    @Query('search')
    search: string,
  ): Promise<Company[]> {
    return this.companyService.searchByName(search);
  }

}
