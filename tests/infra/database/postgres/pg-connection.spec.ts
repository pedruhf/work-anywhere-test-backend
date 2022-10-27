import {
  Connection,
  createConnection,
  getConnection,
  getConnectionManager,
} from "typeorm";

jest.mock("typeorm", () => ({
  getConnectionManager: jest.fn(),
  createConnection: jest.fn(),
}));

class PgConnection {
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
}

describe("PgConnection", () => {
  let hasSpy: jest.Mock;
  let createConnectionSpy: jest.Mock;
  let getConnectionManagerSpy: jest.Mock;
  let sut: PgConnection;

  beforeAll(() => {
    hasSpy = jest.fn().mockReturnValue(true);
    getConnectionManagerSpy = jest.fn().mockReturnValue({
      has: hasSpy,
    });
    jest.mocked(getConnectionManager).mockImplementation(getConnectionManagerSpy);

    createConnectionSpy = jest.fn();
    jest.mocked(createConnection).mockImplementation(createConnectionSpy);
  });

  beforeEach(() => {
    sut = PgConnection.getInstance();
  });

  test("Should have only one instance", () => {
    const sut2 = PgConnection.getInstance();

    expect(sut).toBe(sut2);
  });

  test("Should create a new connection", async () => {
    hasSpy.mockReturnValueOnce(false);
    await sut.connect();

    expect(createConnectionSpy).toHaveBeenCalledWith();
    expect(createConnectionSpy).toHaveBeenCalledTimes(1);
  });
});
