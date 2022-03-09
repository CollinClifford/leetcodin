var maximumWealth = function (accounts) {
  let map = {};
  accounts.forEach((account, index) => {
    account.forEach((num) => {
      if (map[index]) {
        map[index] += num;
      } else {
        map[index] = num;
      }
    });
  });
  let result = Object.values(map);
  result.sort((a, b) => a - b);
  return result[result.length - 1];
};
