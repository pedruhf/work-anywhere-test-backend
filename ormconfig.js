module.exports = {
  "type": "postgres",
  "host": process.env.DB_HOST,
  "port": process.env.DB_PORT,
  "username": process.env.DB_USERNAME,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_DATABASE,
  "entities": [`src/infra/database/postgres/entities/index.ts`],
  "migrations": [`src/infra/database/postgres/migrations/*.ts`],
  "cli": {
    "entitiesDir": "dist/src/infra/database/postgres/entities",
    "migrationsDir": "dist/src/infra/database/postgres/migrations",
 }
}
