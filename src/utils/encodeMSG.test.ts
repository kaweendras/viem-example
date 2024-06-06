import encodeMSG from './encodeMSG';

describe('encodeMSG', () => {
  it('should correctly encode a message', () => {
    const msg = { key: 'value', number: 123, bigInt: BigInt(9007199254740991) };
    const expectedOutput = '%3Cb%3EX%20value%20Changed%3C%2Fb%3E%20%F0%9F%9A%80%0A%0A%20%20%20%20%3Ccode%3E%7B%0A%20%20%22key%22%3A%20%22value%22%2C%0A%20%20%22number%22%3A%20123%2C%0A%20%20%22bigInt%22%3A%20%229007199254740991%22%0A%7D%3C%2Fcode%3E%0A%E2%96%B6%EF%B8%8FProject%20-%20%3Ca%20href%3D%22https%3A%2F%2Fgithub.com%2Fkaweendras%2Fviem-example%22%3EVIEM%20Examples%3C%2Fa%3E%E2%97%80%EF%B8%8F';

    expect(encodeMSG(msg)).toBe(expectedOutput);
  });
});