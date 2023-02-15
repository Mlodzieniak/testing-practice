const reverseString = require("../src/reverseString.js");

test("revers the string", () => {
  expect(reverseString("new york")).toMatch(/^kroy wen$/);
});
