import { Client } from "pg";
import "dotenv/config";

const database = new Client({
  user: "postgres",
  password: "C@rol3006",
  host: "localhost",
  database: "users_db",
  port: 5432,
});

export const startDatabase = async () => {
  await database.connect();
};

export default database;
