import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

enum UserRole {
  EMPLOYEE = 'EMPLOYEE',
  CLIENT = 'CLIENT',
}

enum UserStatus {
  ACTIVE ='ACTIVE',
  DISABLED ='DISABLED',
}

@Entity()
export class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: 'varchar',
    nullable: false,
    length: 120
  })
  name: string;
  @Column({
    type: 'varchar',
    nullable: false,
    length: 120
  })
  email: string;
  @Column({
    type: 'varchar',
    nullable: false,
    length: 255
  })
  password: string;
  @Column({
    enum: UserRole,
    nullable: false,
    default: UserRole.CLIENT
  })
  rol: UserRole;
  @Column({
    enum: UserStatus,
    nullable: false,
    default: UserStatus.ACTIVE
  })
  status: UserStatus;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}