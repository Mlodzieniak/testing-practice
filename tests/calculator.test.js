const calculator = require("../src/calculator");

test("adding", () => {
  expect(calculator.add(2, 5)).toBe(7);
});
test("subtraction", () => {
  expect(calculator.subtract(5, 2)).toBe(3);
  expect(calculator.subtract(1, 10)).toBe(-9);
});
test("division", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});
test("multiplication", () => {
  expect(calculator.multiply(10, 2)).toBe(20);
});
