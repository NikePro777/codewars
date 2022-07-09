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
      console.log(k);
      number = Number(strng.slice(-j));
      if (strng[strng.length - 1] == 0) {
        return `${strng.slice(0, -1)}1`;
      } else return `${strng.slice(0, -k)}${"0".repeat(k - j)}${++number}`;
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
