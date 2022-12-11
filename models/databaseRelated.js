const client = require('./connect');

const createTables = async() => {
  await client.query(`
CREATE TABLE user_info(
 id SERIAL PRIMARY KEY,
name VARCHAR(100) NOT NULL,
role VARCHAR(30) NOT NULL,
password VARCHAR(255) NOT NULL,
created_date DATE DEFAULT CURRENT_DATE,
username VARCHAR(20),
permissions VARCHAR[],
contact VARCHAR(20)
);
`);
};

createTables();
