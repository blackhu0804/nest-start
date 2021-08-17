import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../dto/create.user.dto';
import { UserService } from '../user.service';

@Controller('login')
export class LoginController {
  constructor(
    private readonly userService: UserService
  ) {}

  @Post()
  async login(
		@Body() data: CreateUserDto
  ): Promise<any> {
    return await this.userService.login(data);
  }
}
