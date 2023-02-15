function cipher(str, shift) {
  const alphabet = Array.from("abcdefghijklmnopqrstuvwxyz");
  let result = "";
  let correctedShift = shift;
  if (correctedShift > alphabet.length) {
    correctedShift = shift % alphabet.length;
  }
  console.log(correctedShift);

  //   const exp = new RegExp(/^[0-9]|[,./[]:;]|\s+$/);
  const exp = /^[a-z]|[A-Z]$/;
  str.split("").forEach((char) => {
    const charPos = alphabet.findIndex((ele) => ele === char);
    if (exp.test(char)) {
      if (charPos + correctedShift > alphabet.length) {
        result += alphabet[charPos + correctedShift - alphabet.length];
      } else {
        result += alphabet[charPos + correctedShift];
      }
    } else {
      result += char;
    }
  });

  //   for (let i = 0; i < str.length; i++) {
  //     if (i + correctedShift > alphabet.length) {
  //       result +=
  //         alphabet[
  //           alphabet.findIndex((ele) => ele === str[i]) +
  //             correctedShift -
  //             alphabet.length
  //         ];
  //     } else {
  //       result +=
  //         alphabet[alphabet.findIndex((ele) => ele === str[i]) + correctedShift];
  //     }
  //   }
  return result;
}
module.exports = cipher;
