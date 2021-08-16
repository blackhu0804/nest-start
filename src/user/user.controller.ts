import { Body, Controller, Get, ParseIntPipe, Post, Query, Response, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from '../guard/auth.guard';
import { LoggingInterceptor } from '../interceptors/logging.interceptor';
import { LogService } from '../modules/log/log.service';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
@UseInterceptors(LoggingInterceptor)
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
	@UseGuards(AuthGuard)
	async userList(): Promise<UserEntity[]> {
		return await this.userService.userList();
	}
}
