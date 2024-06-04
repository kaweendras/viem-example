import checkTransactionCount from "./checkTransactionCount";

describe("checkTransactionCount", () => {
  it("Should return the correct transaction count", async () => {
    // Arrange
    const expectedTxCount = 50; // replace with the expected transaction count

    // Act
    const txCount = await test();

    // Assert
    expect(txCount).toEqual(expectedTxCount);
  });
});

async function test() {
  const result = await checkTransactionCount();
  return result;
}
