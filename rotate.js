let rotate = function (numsa, k) {
  let split;
  if (k > numsa.length) {
    split = numsa.splace(numsa.length);
  } else {
    split = numsa.splice(numsa.length - k);
  }
  numsa.unshift(...split);
  return numsa;
};
