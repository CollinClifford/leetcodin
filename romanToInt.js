var romanToInt = function (s) {
  s = s.split("");
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    if (
      (s[i] === "I" && s[i + 1] === "V") ||
      (s[i] === "I" && s[i + 1] === "X")
    ) {
      s[i] = -1;
    }
    if (
      (s[i] === "X" && s[i + 1] === "L") ||
      (s[i] === "X" && s[i + 1] === "C")
    ) {
      s[i] = -10;
    }
    if (
      (s[i] === "C" && s[i + 1] === "D") ||
      (s[i] === "C" && s[i + 1] === "M")
    ) {
      s[i] = -100;
    }
    switch (s[i]) {
      case "I":
        s[i] = 1;
        break;
      case "V":
        s[i] = 5;
        break;
      case "X":
        s[i] = 10;
        break;
      case "L":
        s[i] = 50;
        break;
      case "C":
        s[i] = 100;
        break;
      case "D":
        s[i] = 500;
        break;
      case "M":
        s[i] = 1000;
        break;
    }
    total += s[i];
  }
  return total;
};
