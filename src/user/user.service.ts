import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
	async userList(): Promise<any[]> {
		return [
			{
				id: 0,
				name: 'zhangsan'
			},
			{
				id: 1,
				name: 'lisi'
			}
		]
	}
}
