import createAccount from "./createAccount";

describe("createAccount", () => {
  it("should create a new account", () => {
    // Arrange
    const expectedAccount = {
      privateKey: expect.stringMatching(/^0x[a-fA-F0-9]{64}$/),
      address: expect.stringMatching(/^0x[a-fA-F0-9]{40}$/),
      publicKey: expect.stringMatching(/^0x[a-fA-F0-9]{130}$/),
    };

    // Act
    const account = createAccount();

    // Assert
    expect(account).toEqual(expect.objectContaining(expectedAccount));
  });
});
