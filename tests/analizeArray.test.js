const analizeArray = require("../src/analizeArray");

test("calculate average", () => {
  expect(analizeArray([10, 5, 0])).toHaveProperty("average", 5);
  expect(analizeArray([1, 5, 15])).toHaveProperty("average", 7);
});

test("calculate min", () => {
  expect(analizeArray([10, 5, 0])).toHaveProperty("min", 0);
  expect(analizeArray([1, 5, 15])).toHaveProperty("min", 1);
  expect(analizeArray([8, 5, 15])).toHaveProperty("min", 5);
});
test("calculate max", () => {
  expect(analizeArray([10, 5, 0])).toHaveProperty("max", 10);
  expect(analizeArray([1, 5, 15])).toHaveProperty("max", 15);
  expect(analizeArray([8, 5, 100, 15])).toHaveProperty("max", 100);
});

test("calculate length", () => {
  expect(analizeArray([10, 5, 0])).toHaveProperty("length", 3);
  expect(analizeArray([1, 5, 15, 5, 14, 16, 1, 1, 1, 2])).toHaveProperty(
    "length",
    10
  );
  expect(analizeArray([])).toHaveProperty("length", 0);
});
