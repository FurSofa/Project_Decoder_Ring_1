function caesar(input, shift = 0, encode = true) {
  if (shift < -25 || shift > 25 || shift === 0) return false;
  if (encode === false) {
    if (Math.sign(shift) === 1) {
      shift = -Math.abs(shift);
    } else if (Math.sign(shift) === -1) {
      shift = Math.abs(shift);
    }
  }
  
  let result = "";
  let lcInput = input.toLowerCase();

  for (let i = 0; i < lcInput.length; i++) {
    let char = lcInput.charCodeAt(i);

    if (Math.sign(shift) === 1) {
      if (char >= 97 && char <= 122) {
        result += String.fromCharCode(((char - 97 + shift) % 26) + 97);
      } else result += lcInput[i];
    } else if (Math.sign(shift) === -1) {
      if (char >= 97 && char <= 122) {
        result += String.fromCharCode(((char - 122 + shift) % 26) + 122);
      } else result += lcInput[i];
    }
  }
  return result;
}
// caesar("sEcrEt   m3ssages  4re fun !!!", 3)
module.exports = caesar;
