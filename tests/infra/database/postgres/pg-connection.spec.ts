import {
  createConnection,
  getConnection,
  getConnectionManager,
  getRepository,
} from "typeorm";

import { PgFilm } from "@/infra/database/postgres/entities";
import { PgConnection } from "@/infra/database/postgres";
import { ConnectionNotFoundError } from "@/infra/database/errors";

jest.mock("typeorm", () => ({
  getConnectionManager: jest.fn(),
  createConnection: jest.fn(),
  getConnection: jest.fn(),
  getRepository: jest.fn(),
  Entity: jest.fn(),
  PrimaryGeneratedColumn: jest.fn(),
  Column: jest.fn(),
}));

describe("PgConnection", () => {
  let hasSpy: jest.Mock;
  let getConnectionManagerSpy: jest.Mock;
  let createConnectionSpy: jest.Mock;
  let closeSpy: jest.Mock;
  let getConnectionSpy: jest.Mock;
  let getRepositorySpy: jest.Mock;
  let sut: PgConnection;

  beforeAll(() => {
    hasSpy = jest.fn().mockReturnValue(true);
    getConnectionManagerSpy = jest.fn().mockReturnValue({
      has: hasSpy,
    });
    jest
      .mocked(getConnectionManager)
      .mockImplementation(getConnectionManagerSpy);

    createConnectionSpy = jest.fn();
    jest.mocked(createConnection).mockImplementation(createConnectionSpy);

    closeSpy = jest.fn().mockReturnValue(false);
    getConnectionSpy = jest.fn().mockReturnValue({
      close: closeSpy,
    });
    jest.mocked(getConnection).mockImplementation(getConnectionSpy);

    getRepositorySpy = jest.fn().mockReturnValue("any_repository");
    jest.mocked(getRepository).mockImplementation(getRepositorySpy);
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

  test("Should use a existing connection", async () => {
    hasSpy.mockReturnValueOnce(true);
    await sut.connect();

    expect(getConnectionSpy).toHaveBeenCalledWith();
    expect(getConnectionSpy).toHaveBeenCalledTimes(1);
  });

  test("Should disconnect", async () => {
    await sut.connect();
    await sut.disconnect();

    expect(closeSpy).toHaveBeenCalledWith();
    expect(closeSpy).toHaveBeenCalledTimes(1);
  });

  test("Should return ConnectionNotFoundError on disconnect when connection does not exists", async () => {
    const disconnectPromise = sut.disconnect();

    await expect(disconnectPromise).rejects.toThrow(
      new ConnectionNotFoundError()
    );
  });

  test("Should get repository", async () => {
    await sut.connect();
    const repository = sut.getRepository(PgFilm);

    expect(getRepositorySpy).toHaveBeenCalledWith(PgFilm);
    expect(getRepositorySpy).toHaveBeenCalledTimes(1);
    expect(repository).toBe("any_repository");
    await sut.disconnect();
  });

  test("Should return ConnectionNotFoundError on getRepository when connection does not exists", async () => {
    expect(getRepository).not.toHaveBeenCalled();
    expect(() => sut.getRepository(PgFilm)).toThrow(
      new ConnectionNotFoundError()
    );
  });
});
