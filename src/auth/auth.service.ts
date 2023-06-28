import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService,
      private jwtService: JwtService) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if(!user) throw new Error("Username does not have an account.");
    const passwordValid = await bcrypt.compare(pass, user.password)
    if (!passwordValid) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}