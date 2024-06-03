import checkBalance from "./checkBalance";

describe("checkBalance", () => {
  it("should return the correct balance", async () => {
    // Arrange
    const expectedBalance = 0.09471663857419; // replace with the expected balance

    // Act
    const balance = await checkBalance();

    // Assert
    expect(balance).toEqual(expectedBalance);
  });
});
