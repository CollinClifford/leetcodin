var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 0;
    let right = n;
    while (left < right) {
      let middle = Math.floor(left + (right - left) / 2);
      // if the middle number isBadVersion
      if (isBadVersion(middle)) {
        // change value of end to middle
        right = middle;
      } else {
        // else update the start to middle + 1
        left = middle + 1;
      }
    }
    return left;
  };
};
