import "./config/module-alias";
import "reflect-metadata";
import { PgConnection } from "@/infra/database/postgres";

PgConnection.getInstance().connect()
  .then(async () => {
    const { app } = await import("@/main/config/app");
    app.listen(3000, () => console.log("Server is running at http://localhost:3000"));
  })
  .catch(console.error);
