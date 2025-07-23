/**
 * Calculates the sum of two numbers
 * @param a - First number
 * @param b - Second number
 * @returns The sum of a and b
 * @example
 * sum(1, 2) // Returns 3
 */
export function sum(a: number, b: number): number {
  return a + b;
}

/**
 * Calculates the multiplication of two numbers.
 * @param a The first number.
 * @param b The second number.
 * @returns The produit of a and b.
 * @example
 * multiply(2, 3) // Returns 6
 */
export function multiply(a: number, b: number): number {
  return a * b;
}

export function divide(a: number, b: number): number {
  if (b !== 0) return a / b;
  else throw new Error('Can not divide by 0');
}

export function addTotal(...nums: number[]): number {
  let result = 0;
  nums.forEach(n => {
    result += n;
  });
  return result;
}
