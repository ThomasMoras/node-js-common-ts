import { addTotal, divide, multiply, sum } from '../src/calculator';

describe('Math utilities', () => {
  test('should add two numbers', () => {
    expect(sum(2, 3)).toBe(5);
    expect(sum(-1, 1)).toBe(0);
  });
  test('should multiply two numbers', () => {
    expect(multiply(3, 4)).toBe(12);
    expect(multiply(2.3, 5)).toBe(11.5);
  });

  test('should divide a by b', () => {
    expect(divide(10, 2)).toBe(5);
  });
  test('should throw an error, can not divide by 0', () => {
    expect(divide(5, 0)).toThrow('Can not divide by 0');
  });

  test('should add all number', () => {
    expect(addTotal(3, 4)).toBe(7);
    expect(addTotal(1, 2, 3)).toBe(6);
  });
});
