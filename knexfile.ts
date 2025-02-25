import 'dotenv/config';

import type { Knex } from "knex";
const config: Knex.Config = {
  client: "pg",
  connection: {
    host: "localhost",
    port: 5432,
    user: "postgres",
    database: "api",
    password: "postgres",
    ssl: false
  },
  migrations:{
    extension: "ts",
    directory: "./src/database/migrations"
  },
  pool: {
    min: 2,
    max: 10,
  }
}

export default config