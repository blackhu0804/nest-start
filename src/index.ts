import { Post } from '@nestjs/common';
import 'reflect-metadata';
import { createConnection, getConnection } from 'typeorm';
import { Posts } from './entity/Posts';
import { Tags } from './entity/tags';
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
    // const result = await userRepository.find({ relations: ['userDetail'] });
    // console.log(result);

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

    // 添加一对多数据
    // const user = await userRepository.findOne(9);
    // const post1 = new Posts();
    // post1.title = 'title1';
    // post1.content = 'content1';
    // const post2 = new Posts();
    // post2.title = 'title2';
    // post2.content = 'content2';

    // user.posts = [post1, post2];

    // const postRepository = connection.getRepository(Posts);
    // await postRepository.save(post1);
    // await postRepository.save(post2);
    // await userRepository.save(user);
    // console.log('添加数据成功');

    // 查询一对多数据
    // const result = await userRepository.findAndCount({ where: {id: 9}, relations: ['posts'] });
    // const result = await postRepository.find({relations: ['user']});
    // console.log(result);

    // 添加多对多数据
    // const tag1 = new Tags();
    // tag1.name = 'js';
    // const tag2 = new Tags();
    // tag2.name = 'css';

    // const tagRepository = connection.getRepository(Tags);
    // tagRepository.save(tag1);
    // tagRepository.save(tag2);

    // const posts1 = new Posts();
    // posts1.title = '文章一';
    // posts1.content = '文章一内容';
    // posts1.tags = [tag1, tag2];

    // // 帖子二
    // const posts2 = new Posts();
    // posts2.title = '文章二';
    // posts2.content = '文章二内容';
    // posts2.tags = [tag1];
    // user.posts = [posts1, posts2];

    // await postRepository.save(posts1);
    // await postRepository.save(posts2);
    // await userRepository.save(user);
    // console.log('添加数据成功！');

    // const result = await postRepository.findOne({ where: { id: 8 }, relations: ['tags', 'user'] });
    // console.log(result);

    // find 使用
    // const result = await userRepository.find({ order: { id: 'ASC' }, relations: ['userDetail']});
    // console.log(result)

    // QueryBuilder
    // 1. 查询
    // const user = await getConnection()
    //   .createQueryBuilder(User, 'user')
    //   .select(['user.id', 'user.username'])
    //   .where('(user.id=:id)', { id: 9 })
    //   .getOne();
    // console.log(user);

    // 2. 插入数据
    // const result = await getConnection()
    //   .createQueryBuilder()
    //   .insert()
    //   .into(User)
    //   .values([{ username: 'suyu', 'password': '123456'}])
    //   .execute()
    // console.log(result);

    // 3. 更新数据
    // const result = await getConnection()
    //   .createQueryBuilder()
    //   .update(User)
    //   .set({ username: '测试' })
    //   .where('id=:id', { id: 10 })
    //   .execute()
    // console.log(result);

    // 4. 删除数据
    // const result = await getConnection()
    //   .createQueryBuilder()
    //   .delete()
    //   .from(User)
    //   .where('id=:id', { id: 10 })
    //   .execute()
    // console.log(result);
  })
  .catch((error) => console.log(error));
