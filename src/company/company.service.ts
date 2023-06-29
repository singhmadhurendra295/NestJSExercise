import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Company } from '../schemas/company.schema';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompanyService {
  constructor(@InjectModel(Company.name) private companyModel: Model<Company>) { }

  async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const createdCompany = new this.companyModel(createCompanyDto);
    return await createdCompany.save();
  }

  async findAll(): Promise<Company[]> {
    const companies = await this.companyModel.find();
    return companies;
  }

  async findById(id: string): Promise<Company> {
    const company = await this.companyModel.findById(id);
    if (!company) {
      throw new Error('Company not found.');
    }
    return company;
  }

  async searchByName(search: string): Promise<Company[]> {
    const companies = await this.companyModel.find({ 'name': new RegExp(search, 'i') });
    return companies;
  }

  async update(uuid: string, updateCompanyDto: UpdateCompanyDto): Promise<any> {
    const company = await this.companyModel.updateOne({ uuid }, updateCompanyDto);
    return company;
  }

  async remove(uuid: string): Promise<any> {
    const company = await this.companyModel.deleteOne({ uuid });
    return company;
  }



}
