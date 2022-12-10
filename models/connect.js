const { Client } = require('pg');
const client = new Client({
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  database: 'possys',
  port: 5432,
});

module.exports = client;
