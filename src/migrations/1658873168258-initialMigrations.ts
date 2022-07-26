import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigrations1658873168258 implements MigrationInterface {
    name = 'initialMigrations1658873168258'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL, "name" character varying NOT NULL, "password" character varying NOT NULL, "created_on" TIMESTAMP NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "favorite_list" ("id" uuid NOT NULL, "name" character varying NOT NULL, "photourl" character varying NOT NULL, "userId" uuid, CONSTRAINT "REL_fbbb4b0b4654357a4bd1138ccb" UNIQUE ("userId"), CONSTRAINT "PK_298ea5adef17b30abd7df2d3a1d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "favorite_list" ADD CONSTRAINT "FK_fbbb4b0b4654357a4bd1138ccbd" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "favorite_list" DROP CONSTRAINT "FK_fbbb4b0b4654357a4bd1138ccbd"`);
        await queryRunner.query(`DROP TABLE "favorite_list"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
