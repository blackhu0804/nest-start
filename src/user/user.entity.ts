import { Exclude, Expose } from "class-transformer";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, OneToMany } from "typeorm";
// import { Posts } from "./Posts";
// import { UserExtend } from "./UserExtend";
import * as jwt from 'jsonwebtoken';
@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    comment: '主键id'
  })
  id: number;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 50,
    unique: true,
    name: 'username', // 如果是一样的可以不指定
    comment: '用户名'
  })
  username: string;

  @Exclude()
  @Column({
    type: 'varchar',
    nullable: false,
    length: 100,
    comment: '密码'
  })
  password: string;

  @Column('tinyint', {
    nullable: false,
    default: () => 0,
    name: 'is_del',
    comment: '是否删除,1表示删除,0表示正常'
  })
  isDel: number;

  @CreateDateColumn({
    type: 'timestamp',
    nullable: false,
    name: 'created_at', // mysql数据库规范是使用下划线命名的,不使用驼峰
    comment: '创建时间'
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    nullable: false,
    name: 'updated_at',
    comment: '更新时间',
  })
  updateAt: Date;

  @Expose()
  isDelStr(): string {
    return this.isDel ? '删除' : '正常';
  }

  @Expose()
  private get token() {
    const { id, username } = this;
    return jwt.sign({
      id,
      username
    },
    process.env.SECRET, // 加盐
    {
      expiresIn: '7d', // 过期时间
    });
  }

  public toResponseObject(isShowToken = true): { [propsName: string ]: any } {
    const { password, token, username, ...params } = this;
    const responseData = {
      username,
      ...params
    }
    if (isShowToken) {
      return { ...responseData, token };
    } else {
      return responseData;
    }
  }

//   @OneToOne(() => UserExtend, userExtend => userExtend.user)
//   userDetail: UserExtend

//   @OneToMany(() => Posts, post => post.user)
//   posts: Posts[]
}
