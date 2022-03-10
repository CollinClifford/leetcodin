var maxSubArray = function (nums) {
  let max = Number.MIN_SAFE_INTEGER;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = Math.max(nums[i], nums[i] + sum);
    if (sum > max) {
      max = sum;
    }
  }
  return max;
};
