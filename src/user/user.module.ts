import { Module } from '@nestjs/common';
import { LogModule } from '../modules/log/log.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    LogModule.register('user-test')
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
