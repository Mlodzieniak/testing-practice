function capitalize(string) {
  return string.replace(string[0], string[0].toUpperCase());
}

const myString = "testing jest.";
console.log(capitalize(myString));
