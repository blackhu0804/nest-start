import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogModule } from '../modules/log/log.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserEntity } from "./user.entity";
import { LoginController } from './login/login.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity
    ]),
    LogModule.register('user-test')
  ],
  controllers: [UserController, LoginController],
  providers: [
    UserService
  ]
})
export class UserModule {}
