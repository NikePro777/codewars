// Your job is to write a function which increments a string, to create a new string.
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:
// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100
// Attention: If the number has leading zeros the amount of digits should be considered.
function incrementString(strng) {
  let k = 0,
    j = 0,
    i = strng.length - 1,
    number = 0;
  for (i; !isNaN(strng[i]); i--) {
    k++;
    if (strng[i] != 0) {
      j++;
    }
  }
  if (k) {
    if (k === j) {
      number = Number(strng.slice(-k));
      return `${strng.slice(0, -k)}${++number}`;
    } else {
      number = strng.slice(-k);
      let numberLength = number.length;
      number = Number(number) + 1;
      let digit = "0".repeat(numberLength - number.toString().length);
      return `${strng.slice(0, -k)}${digit}${number}`;
    }
  } else {
    if (Number(strng[i]) === 0) {
      number = 0;
      return `${strng.slice(0, -1)}${++number}`;
    } else {
      return `${strng}1`;
    }
  }
}

console.log(incrementString("foobar099"));

// best
// function incrementString(input) {
//   if (isNaN(parseInt(input[input.length - 1]))) return input + "1";
//   return input.replace(/(0*)([0-9]+$)/, function (match, p1, p2) {
//     var up = parseInt(p2) + 1;
//     return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
//   });
// }
// //best
// let incrementString = (str) =>
//   str.replace(/([0-8]|\d?9+)?$/, (e) => (e ? +e + 1 : 1));
// //best
//   function incrementString(input) {
//     return input.replace(/([0-8]?)(9*)$/, function(s, d, ns) {
//         return +d + 1 + ns.replace(/9/g, '0');
//       });
//   }
