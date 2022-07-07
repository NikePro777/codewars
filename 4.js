// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !
function pigIt(str) {
  let answer = "";
  let text = str.split(" ");
  for (let i = 0; i < text.length; i++) {
    let pattern = /[a-zA-Z]+/g;
    if (pattern.test(text[i])) {
      let word = text[i].replace(text[i][0], "").concat(`${text[i][0]}ay`);
      answer = answer.concat(` ${word}`);
    } else {
      answer = answer.concat(` ${text[i]}`);
    }
  }
  return answer.trim();
}
console.log(pigIt("Pig latin is cool !"));

// Best

// function pigIt(str) {
//   return str.replace(/(\w)(\w*)(\s|$)/g, "$2$1ay$3");
// }

// Best2

// function pigIt(str) {
//     return str.replace(/\w+/g, (w) => {
//       return w.slice(1) + w[0] + 'ay';
//     });
//   }
