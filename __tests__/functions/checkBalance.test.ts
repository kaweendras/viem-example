// src/functions/checkBalance.test.ts

import checkBalance from '../../src/functions/checkBalance';

describe('checkBalance', () => {
  it('should return the correct balance', async () => {
    // Arrange
    const expectedBalance = 100; // replace with the expected balance

    // Act
    const balance = await checkBalance();

    // Assert
    expect(balance).toEqual(expectedBalance);
  });
});