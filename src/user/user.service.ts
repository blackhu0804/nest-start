import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
	constructor (
		@InjectRepository(UserEntity)
		private readonly userRepository: Repository<UserEntity>
	) {}

	async createUser(data: { [propName: string ]: any }): Promise<UserEntity> {
		return await this.userRepository.save(data);
	}

	async userList(): Promise<UserEntity[]> {
		return await this.userRepository.find();
	}
}
