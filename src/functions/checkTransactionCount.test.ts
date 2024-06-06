import checkTransactionCount from "./checkTransactionCount";

describe("checkTransactionCount", () => {
  it("Should return the correct transaction count", async () => {
    // Arrange
    const expectedTxCount = 50; // replace with the expected transaction count

    // Act
    const txCount = await checkTransactionCount();

    // Assert
    expect(txCount).toEqual(expectedTxCount);
  });
});
