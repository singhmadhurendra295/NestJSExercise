import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { APP_GUARD, RouterModule } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerMiddleware } from './logger.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './company/company.module';
import { TeamsModule } from './teams/teams.module';
import { UserModule } from './users/users.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/auth.guard';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URL),
    CompanyModule,
    TeamsModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService, {
    provide: APP_GUARD,
    useClass: AuthGuard,
  },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('company');
  }
}
