import pkg from "pg";

const { Client } = pkg
import "dotenv/config";


const database = new Client(
  process.env.NODE_ENV === "test"
    ? {
        user: "Win10",
        host: "localhost",
        database: "tests_RM",
        password: "agnes1ana2",
        port: 5432,
      }
    : {
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
      }
);

export const startDatabase = async () => {
  await database.connect();
};

export default database;