module.require = "../capitalize.js";

test("capitalize first letter", () => {
  expect(capitalize("new york").toMatch(/^New york$/));
});
