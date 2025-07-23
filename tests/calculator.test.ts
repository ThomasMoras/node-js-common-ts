import { multiply, sum } from "../src/calculator";

describe("Math utilities", () => {
  test("should add two numbers", () => {
    expect(sum(2, 3)).toBe(5);
    expect(sum(-1, 1)).toBe(0);
  });
  test("should multiply two numbers", () => {
    expect(multiply(3, 4)).toBe(12);
    expect(multiply(2.3, 5)).toBe(11.5);
  });
});
