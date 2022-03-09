var sortedSquares = function (nums) {
  let result = [];
  nums.forEach((num) => {
    result.push(num ** 2);
  });
  result.sort((a, b) => a - b);
  return result;
};
