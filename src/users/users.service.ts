import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../schemas/user.schema';

@Injectable()
export class UsersService {
      constructor(@InjectModel(User.name) private userModel: Model<User>) { }

      async createUser(username: string, password: string): Promise<User> {
            return this.userModel.create({
                  username,
                  password,
            });
      }
      async getUser(query: object): Promise<User> {
            return this.userModel.findOne(query);
      }

      async findOne(username: string): Promise<User | undefined> {
            return this.userModel.findOne({ username });
      }
}