import { createClient } from "./createClient";

describe("createClient", () => {
  it("should create a client", async () => {
    const client = await createClient();
    expect(client).toBeDefined();
  });
});
