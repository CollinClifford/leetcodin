var isPalindrome = function (x) {
  let z = [];
  x = x.toString().split("");
  for (let i = x.length - 1; i >= 0; i--) {
    z.push(x[i]);
  }
  z = parseInt(z.join(""));
  x = parseInt(x.join(""));
  if (z === x) {
    return true;
  }
  return false;
};
