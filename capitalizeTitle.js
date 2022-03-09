var capitalizeTitle = function (title) {
  title = title.toLowerCase().split(" ");
  let formattedTitle = [];
  title.forEach((word) => {
    if (word.length < 2) {
      let letters = word.split("");
      letters.forEach((let, index) => {
        if (index === 0) {
          letters[0] = let.toUpperCase();
        }
        word = letters.join("");
      });
    }
    formattedTitle.push(word);
  });

  formattedTitle = formattedTitle.join(" ");
  return formattedTitle;
};
