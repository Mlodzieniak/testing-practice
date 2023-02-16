function analizeArray(arr) {
  const average = arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
  const { length } = arr;
  let min = arr[0];
  let max = arr[0];

  arr.forEach((int) => {
    if (int < min) {
      min = int;
    }
    if (int > max) {
      max = int;
    }
  });
  return {
    average,
    min,
    max,
    length,
  };
}
module.exports = analizeArray;
