import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { jwtConstants } from './constants';

@Module({
      imports: [
            UserModule,
            JwtModule.register({
                  global: true,
                  secret: jwtConstants.secret,
                  signOptions: { expiresIn: '600s' },
            }),
      ],
      providers: [AuthService],
      controllers: [AuthController],
      exports: [AuthService],
})
export class AuthModule { }