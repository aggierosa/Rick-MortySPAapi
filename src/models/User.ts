import { FavoriteList } from "./Favorite";
import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity()
export class User {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  created_on: Date;

  @OneToMany((type) => FavoriteList, (favorite) => favorite.user)
  favorites: FavoriteList[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
