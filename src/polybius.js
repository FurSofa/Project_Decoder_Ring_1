const alphabet = [
  ["a", "b", "c", "d", "e"],
  ["f", "g", "h", "(i/j)", "k"],
  ["l", "m", "n", "o", "p"],
  ["q", "r", "s", "t", "u"],
  ["v", "w", "x", "y", "z"],
];

function countSpaces(str) {
  // take in string, counts spaces
  // returns number of spaces
  let counter = 0;
  str.split("").forEach((char) => {
    if (char === " ") counter++;
  });
  return counter;
}

function polybius(input, encode = true) {
  if (typeof input !== "string" || input.length === 0) return false;

  let result = []; // numerical result should still be string
  let text = input.toLowerCase();
  if (encode) {
    text.split("").forEach((char) => {
      let letterFound = false;
      for (let i = 0; i < alphabet.length; i++) {
        for (let j = 0; j < alphabet[i].length; j++) {
          if (char === " ") {
            if (letterFound) break;
            letterFound = true;
            result.push(char);
            letterFound = true;
            break;
          }
          if (char === "i" || char === "j") {
            if (letterFound) break;
            letterFound = true;
            result.push(42);
            break;
          }
          if (char === alphabet[i][j] && char !== "i") {
            if (letterFound) break;
            letterFound = true;
            result.push(`${j + 1}${i + 1}`);
            break;
          }
        }
      }
    });
  } else {
    if ((input.length - countSpaces(input)) % 2 !== 0) return false;

    for (let i = 0, l = text.length; i < l; i += 2) {
      if (text[i] === " ") {
        result.push(" ");
        i--;
        continue;
      } else {
        const row = parseInt(text.charAt(i), 10) - 1;
        const col = parseInt(text.charAt(i + 1), 10) - 1;

        result.push(alphabet[col][row]);
      }
    }
  }

  return `${result.join("")}`;
}


module.exports = polybius;
