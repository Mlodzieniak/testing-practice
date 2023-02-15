const capitalize = require("../src/capitalize.js");

test("capitalize first letter", () => {
  expect(capitalize("new york")).toMatch(/^New york$/);
});
test("remove spaces from start of the string", () => {
  expect(capitalize("   baby")).toMatch(/^Baby$/);
});
