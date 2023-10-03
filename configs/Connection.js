import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "yourdbusername",
  password: "yourdbpassword",
  host: "localhost",
  database: "yourdatabase",
  port: 1234,
});

export default pool;
