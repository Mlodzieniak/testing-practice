function cipher(str, shift) {
  const alphabet = Array.from("abcdefghijklmnopqrstuvwxyz");
  let result = "";
  let correctedShift = shift;
  if (correctedShift > alphabet.length) {
    correctedShift = shift % alphabet.length;
  }

  const exp = /^[a-z]|[A-Z]$/;
  const capitalExp = /^[A-Z]$/;
  str.split("").forEach((char) => {
    const charPos = alphabet.findIndex((ele) => ele === char.toLowerCase());
    if (exp.test(char)) {
      let newChar = "";
      if (charPos + correctedShift > alphabet.length - 1) {
        newChar = alphabet[charPos + correctedShift - alphabet.length];
      } else {
        newChar = alphabet[charPos + correctedShift];
      }
      if (capitalExp.test(char)) {
        newChar = newChar.toUpperCase();
      }
      result += newChar;
    } else {
      result += char;
    }
  });

  return result;
}
module.exports = cipher;
