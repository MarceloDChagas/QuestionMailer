import { connectionToMongo } from "../../src/config/database/database.mongo";

describe("connectionToMongo", () => {
  it("should connect to MongoDB Atlas", async () => {
    const result = await connectionToMongo();
    expect(result).toEqual("Conectado ao MongoDB Atlas");
  });
});
