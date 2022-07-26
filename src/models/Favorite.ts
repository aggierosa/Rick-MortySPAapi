import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from "typeorm";
import { User } from "./User";
import { v4 as uuid } from "uuid";

@Entity()
export class FavoriteList {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  photourl: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
