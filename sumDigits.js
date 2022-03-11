function sumDigits(number) {
  if (number < 10) {
    return -1;
  }
  let sum = 0;
  number
    .toString()
    .split("")
    .forEach((num) => {
      sum += parseInt(num);
    });
  return sum;
}

console.log(sumDigits(125));
