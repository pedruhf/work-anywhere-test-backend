module.exports = {
  "type": "postgres",
  "host": process.env.DB_HOST,
  "port": process.env.DB_PORT,
  "username": process.env.DB_USERNAME,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_DATABASE,
  "entities": [`dist/src/infra/database/postgres/entities/index.js`],
  "migrations": [`dist/src/infra/database/postgres/migrations/*.js`]
}
