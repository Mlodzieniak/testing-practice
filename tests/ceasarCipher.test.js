const cipher = require("../src/ceasarCipher");

test("ciphering one word", () => {
  expect(cipher("123", 1)).toMatch(/^123$/);
  expect(cipher("abcde", 2)).toMatch(/^cdefg$/);
});
test("ciphering one word with big shift value", () => {
  expect(cipher("123", 15)).toMatch(/^123$/);
  expect(cipher("abcde", 81)).toMatch(/^defgh$/);
  expect(cipher("abcde", 400)).toMatch(/^klmno$/);
});
test("ciphering entire sentence", () => {
  expect(
    cipher(
      "how to check if a string contains only letters and numbers in javascript.",
      40
    )
  ).toMatch(
    "vck hc qvsqy wt o ghfwbu qcbhowbg cbzm zshhsfg obr biapsfg wb xojogqfwdh."
  );
  expect(cipher("abcde", 2)).toMatch(/^cdefg$/);
});
