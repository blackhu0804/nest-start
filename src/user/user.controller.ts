import { Body, Controller, Get, HttpException, HttpStatus, Post, Query, Response, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from '../guard/auth.guard';
import { LoggingInterceptor } from '../interceptors/logging.interceptor';
import { LogService } from '../modules/log/log.service';
import { CreateUserDto } from './dto/create.user.dto';
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
	@UseGuards(AuthGuard)
  async createUser(
		@Body() data: CreateUserDto
	): Promise<UserEntity> {
		return await this.userService.createUser(data);
	}

	@Get()
	@UseGuards(AuthGuard)
	async userList(): Promise<UserEntity[]> {
		return await this.userService.userList();
	}

	@Post('/login')
  async login(
		@Body() data: CreateUserDto
  ): Promise<any> {
    return await this.userService.login(data);
  }
}
