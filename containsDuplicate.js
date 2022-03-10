var containsDuplicate = function (nums) {
  let array = [];
  let duplicateArray = [];
  nums.forEach((num) => {
    if (!array.includes(num)) {
      array.push(num);
    } else {
      duplicateArray.push(num);
    }
  });
  if (duplicateArray.length) {
    return true;
  }
  return false;
};
