import { Controller, Get, ParseIntPipe, Query, Response } from '@nestjs/common';
import { LogService } from '../modules/log/log.service';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
		private readonly userService: UserService,
		private readonly logService: LogService
	) {}

  @Get('/')
  async userList(
			@Query('age', new ParseIntPipe) age: number,
			@Query('name') name: string
		): Promise<any[]> {
		this.logService.log('运行了userList controller');
		console.log('query:', name, age);
		return await this.userService.userList();
	}

	@Get('login')
	async login(@Response() res) {
		res.cookie('name', 'black', { maxAge: 1000 * 5, httpOnly: true });
		res.send('login');
	}
}
