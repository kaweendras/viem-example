import createWalletclient from "./createWalletClient";

describe("createWalletClient", () => {
  it("should create a client", async () => {
    const client = await createWalletclient();
    expect(client).toBeDefined();
  });
});
