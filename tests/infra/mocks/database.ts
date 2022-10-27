import { createConnection } from "typeorm";

export const dbTestConnection = async (entities?: any[]) => {
  const connection = await createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin123456",
    database: "wa_test",
    entities: entities ?? ["src/infra/database/postgres/entities/index.ts"],
  });
  await connection.synchronize();
  return connection;
};
