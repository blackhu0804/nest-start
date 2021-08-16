import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { User } from './entity/User';
import { UserExtend } from './entity/UserExtend';

createConnection()
  .then(async (connection) => {
    console.log('connect success!');
    // await connection.synchronize();
    // const user = new User();
    // user.username = 'black5';
    // user.password = '123456';
    const userRepository = connection.getRepository(User);

    // 添加：
    // const result = await userRepository.save(user);
    // const result = await connection.manager.save(user);
    // console.log('插入成功', result);

    // 关联表新增
    // const userExtend = new UserExtend();
    // userExtend.mobile = '11111111234';
    // userExtend.address = 'beijing';
    // userExtend.user = user;
    // const userExtendRepository = connection.getRepository(UserExtend);
    // await userExtendRepository.save(userExtend);

    // 查询
    const result = await userRepository.find({ relations: ['userDetail'] });
    console.log(result);

    // 删除：
    // const user = await userRepository.findOne(1);
    // const result = await userRepository.remove(user);

    // 更改：
    // const user = await userRepository.findOne(2);
    // user.password = '234567';
    // await userRepository.save(user);

    // console.log("Loading users from the database...");
    // const users = await connection.manager.find(User);
    // console.log("Loaded users: ", users);

    // console.log("Here you can setup and run express/koa/any other framework.");
  })
  .catch((error) => console.log(error));
