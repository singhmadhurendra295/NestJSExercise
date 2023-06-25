import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Team } from '../schemas/team.schema';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';

@Injectable()
export class TeamsService {

  constructor(@InjectModel(Team.name) private teamModel: Model<Team>) {}

  async create(createTeamDto: CreateTeamDto): Promise<Team> {
    const createdTeam = new this.teamModel(createTeamDto);
    return await createdTeam.save();
  }

  async findAll() : Promise<Team[]> {
    const teams = await this.teamModel.find();
    return teams;
  }

  async findAllGroupbyCompany() {
    const teams = await this.teamModel.aggregate([
      {
        $group: {
          _id: '$companyId',
          teams: { "$push": "$$ROOT" },
          // count: { $sum: 1 } // this means that the count will increment by 1
        }
      }
    ]);
    return teams;
  }
}
