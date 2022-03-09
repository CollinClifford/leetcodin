var detectCapitalUse = function (word) {
  let letters = word.split("");
  if (word === word.toUpperCase() || word === word.toLowerCase()) {
    return true;
  } else if (
    letters[0] === letters[0].toUpperCase() &&
    letters.slice(1).join("") === letters.slice(1).join("").toLowerCase()
  ) {
    return true;
  }
  return false;
};
