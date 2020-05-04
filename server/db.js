const Pool = require("pg").Pool;

const pool = new Pool({
  user: "karthikgg",
  password: "",
  host: "localhost",
  port: "5432",
  database: "pernrodo",
});

module.exports = pool;
