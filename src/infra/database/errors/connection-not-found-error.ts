export class ConnectionNotFoundError extends Error {
  constructor() {
    super("Connection not Found");
    this.name = "ConnectionNotFound";
  }
}
