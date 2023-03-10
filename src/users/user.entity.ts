import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { Exclude } from "class-transformer";
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: Number;
  @Column()
  email: String;
  @Column()
  @Exclude()
  password: String;
}
