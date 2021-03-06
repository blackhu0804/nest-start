import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Posts } from './Posts';

@Entity('tags')
export class Tags {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    comment: '主键id'
  })
  id: number;

  @Column({
    type: 'varchar',
    name: 'name',
    nullable: false,
    unique: true,
    comment: 'tag名称'
  })
  name: string;

  @ManyToMany(() => Posts, post => post.tags)
  @JoinTable({ name: 'tags_posts' })
  posts: Posts[]
}