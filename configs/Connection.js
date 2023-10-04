import pkg from "pg";
const { Pool } = pkg;
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  user: process.env.USERDB,
  password: process.env.PASSWORDDB,
  host: process.env.HOSTDB,
  database: process.env.DATABASE,
  port: process.env.PORT,
});

export default pool;