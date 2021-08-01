export default {
  db: {
    dialect: process.env.DB_CONNECTION, // 'mysql'|'sqlite'|'postgres'|'mssql'
    host: process.env.DB_HOST, // Your host, by default is localhost
    database: process.env.DB_DATABASE, // Your database name
    user: process.env.DB_USERNAME, // Your Postgres user, by default is postgres
    password: process.env.DB_PASSWORD // Your Db password, sometimes by default
    //is empty.
  }
};
