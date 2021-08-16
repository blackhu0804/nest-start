import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogModule } from '../modules/log/log.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserEntity } from "./user.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity
    ]),
    LogModule.register('user-test')
  ],
  controllers: [UserController],
  providers: [
    UserService
  ]
})
export class UserModule {}
