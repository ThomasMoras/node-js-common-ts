export function sum(a, b) {
    return a + b;
}
export function multiply(a, b) {
    return a * b;
}
export function addTotal(...nums) {
    let result = 0;
    nums.forEach((n) => {
        result += n;
    });
    return result;
}
//# sourceMappingURL=calculator.js.map