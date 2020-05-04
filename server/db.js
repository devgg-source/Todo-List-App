const Pool = require("pg").Pool;

const pool = new Pool({
  user: "",//postgres username
  password: "",//password
  host: "localhost",
  port: "5432",//port
  database: "",//database name
});

module.exports = pool;
