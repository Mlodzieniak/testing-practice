function capitalize(lowerCaseString) {
  const arr = Array.from(lowerCaseString);
  while (arr[0] === " ") {
    arr.splice(0, 1);
  }
  arr[0] = arr[0].toUpperCase();
  return arr.join("");
}

module.exports = capitalize;
