import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    comment: '主键id',
  })
  id: number

  @Column('varchar', {
    length: 50,
    comment: '用户名',
    nullable: false,
  })
  username: string

  @Column('varchar', {
    length: 50,
    comment: 'uuid',
    primary: true,
    generated: 'uuid',
    name: 'uuid',
  })
  uuid: string

  @Column('varchar', {
    length: 50,
    comment: '用户密码',
    nullable: false,
  })
  password: string

  @Column('varchar', {
    nullable: true,
    length: 11,
    name: 'mobile',
    comment: '用户手机号码',
  })
  mobile: string | null

  @Column('varchar', {
    nullable: true,
    length: 50,
    name: 'email',
    comment: '用户邮箱',
  })
  email: string | null

  @Column('timestamp', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'created_at',
    comment: '创建时间',
  })
  createdAt: Date

  @Column('timestamp', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'updated_at',
    comment: '最后更新时间',
  })
  updatedAt: Date
}
