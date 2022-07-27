import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigrations1658884136203 implements MigrationInterface {
    name = 'initialMigrations1658884136203'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "favorite_list" ("id" uuid NOT NULL, "name" character varying NOT NULL, "photourl" character varying NOT NULL, "categoryId" uuid, CONSTRAINT "PK_298ea5adef17b30abd7df2d3a1d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL, "name" character varying NOT NULL, "password" character varying NOT NULL, "created_on" TIMESTAMP NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "favorite_list" ADD CONSTRAINT "FK_8120a6569efb89c2fde0413e6f0" FOREIGN KEY ("categoryId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "favorite_list" DROP CONSTRAINT "FK_8120a6569efb89c2fde0413e6f0"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "favorite_list"`);
    }

}
