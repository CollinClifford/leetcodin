var searchInsert = function (nums, target) {
  let result;
  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) {
      result = i;
    } else if (
      (target > nums[i] && target < nums[i + 1]) ||
      target > nums[nums.length - 1]
    ) {
      result = i + 1;
    } else if (target < nums[0]) {
      result = 0;
    }
  }
  return result;
};
