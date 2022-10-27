import { Connection, createConnection, getConnection, getConnectionManager, getRepository, ObjectLiteral, ObjectType, Repository } from "typeorm";
import { ConnectionNotFoundError } from "@/infra/database/errors";

export class PgConnection {
  private static instance?: PgConnection;
  private connection?: Connection;

  private constructor() {}

  static getInstance(): PgConnection {
    if (!PgConnection.instance) {
      PgConnection.instance = new PgConnection();
    }

    return PgConnection.instance;
  }

  public async connect(): Promise<void> {
    if (getConnectionManager().has("default")) {
      this.connection = getConnection();
      return;
    }

    this.connection = await createConnection();
  }

  public async disconnect(): Promise<void> {
    if (!this.connection) {
      throw new ConnectionNotFoundError();
    }
    await getConnection().close();
    this.connection = undefined;
  }

  public getRepository<Entity extends ObjectLiteral>(
    entity: ObjectType<Entity>
  ): Repository<Entity> {
    if (!this.connection) throw new ConnectionNotFoundError();
    return getRepository(entity);
  }
}
