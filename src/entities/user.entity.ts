import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Article } from './article.entity'
import { DateBase } from './date'
import { Category } from './category.entity'

@Entity('user')
export class User extends DateBase {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    comment: '主键id',
  })
  id: number

  @Column({
    type: 'varchar',
    length: 50,
    comment: '用户名',
    nullable: false,
    name: 'username',
  })
  username: string

  @Column({
    type: 'varchar',
    length: 50,
    comment: 'uuid',
    primary: true,
    generated: 'uuid',
    name: 'uuid',
  })
  uuid: string

  @Column({
    type: 'varchar',
    length: 50,
    comment: '用户密码',
    name: 'password',
    nullable: false,
  })
  password: string
  @Column({
    type: 'varchar',
    nullable: true,
    length: 11,
    name: 'mobile',
    comment: '用户手机号码',
  })
  mobile: string | null

  @Column({
    type: 'varchar',
    nullable: true,
    length: 50,
    name: 'email',
    comment: '用户邮箱',
  })
  email: string | null

  @OneToMany(
    () => Article,
    article => article.user,
  )
  articles: Article[]

  @OneToMany(
    () => Category,
    category => category.user,
  )
  categories: Category[]
}
