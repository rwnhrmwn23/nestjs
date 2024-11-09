function addNumber(num1, num2) {
  return num1 + num2;
}

describe('Example test', () => {
  it('equals true', () => {
    expect(true).toEqual(true);
    expect('Irwan').toEqual('Irwan');
  });
  it('add two numbers', () => {
    expect(addNumber(3, 5)).toEqual(8);
  });
});
