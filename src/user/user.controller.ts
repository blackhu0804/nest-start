import { Body, Controller, Get, ParseIntPipe, Post, Query, Response } from '@nestjs/common';
import { LogService } from '../modules/log/log.service';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly logService: LogService,
  ) {}

  @Post()
  async createUser(
		@Body() data: { [propName: string]: any }
	): Promise<UserEntity> {
		return await this.userService.createUser(data);
	}

	@Get()
	async userList(): Promise<UserEntity[]> {
		return await this.userService.userList();
	}
}
