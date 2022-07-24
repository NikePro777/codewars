// Create a RomanNumerals class that can convert a roman numeral to and from an integer value. It should follow the API demonstrated in the examples below.
// Multiple roman numeral values will be tested for each helper method.
// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero.
// In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII.
// 1666 uses each Roman symbol in descending order: MDCLXVI.
// Input range : 1 <= n < 4000
// In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").
// Examples
// RomanNumerals.toRoman(1000); // should return 'M'
// RomanNumerals.fromRoman('M'); // should return 1000
let RomanNumerals = {
  help: {
    I: 1,
    IV: 4,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IX: 9,
    CM: 900,
  },
  toRoman: function (numb) {
    console.log("toRoman: " + numb);
    let answer = { numb: numb, answer: "" };
    while (answer.numb > 0) {
      answer.numb >= 900
        ? divide1000(answer.numb)
        : answer.numb >= 400
        ? divide500(answer.numb)
        : answer.numb >= 90
        ? divide100(answer.numb)
        : answer.numb >= 40
        ? divide50(answer.numb)
        : answer.numb >= 9
        ? divide10(answer.numb)
        : answer.numb >= 4
        ? divide5(answer.numb)
        : divide(answer.numb);
    }
    function divide1000(numb) {
      numb / 1000 >= 1
        ? ((answer.numb = answer.numb - 1000),
          (answer.answer = answer.answer + "M"))
        : numb / 900 >= 1
        ? ((answer.numb = answer.numb - 900),
          (answer.answer = answer.answer + "CM"))
        : {};
    }

    function divide500(numb) {
      if (numb / 500 >= 1) {
        (answer.numb = answer.numb - 500),
          (answer.answer = answer.answer + "D");
      } else {
        numb / 400 >= 1
          ? ((answer.numb = answer.numb - 400),
            (answer.answer = answer.answer + "CD"))
          : {};
      }
    }
    function divide100(numb) {
      if (numb / 100 >= 1) {
        (answer.numb = answer.numb - 100),
          (answer.answer = answer.answer + "C");
      } else {
        numb / 90 >= 1
          ? ((answer.numb = answer.numb - 90),
            (answer.answer = answer.answer + "XC"))
          : {};
      }
    }
    function divide50(numb) {
      if (numb / 50 >= 1) {
        (answer.numb = answer.numb - 50), (answer.answer = answer.answer + "L");
      } else {
        numb / 40 >= 1
          ? ((answer.numb = answer.numb - 40),
            (answer.answer = answer.answer + "XL"))
          : {};
      }
    }
    function divide10(numb) {
      if (numb / 10 >= 1) {
        (answer.numb = answer.numb - 10), (answer.answer = answer.answer + "X");
      } else {
        numb / 9 >= 1
          ? ((answer.numb = answer.numb - 9),
            (answer.answer = answer.answer + "IX"))
          : {};
      }
    }
    function divide5(numb) {
      if (numb / 5 >= 1) {
        (answer.numb = answer.numb - 5), (answer.answer = answer.answer + "V");
      } else {
        numb / 4 >= 1
          ? ((answer.numb = answer.numb - 4),
            (answer.answer = answer.answer + "IV"))
          : {};
      }
    }
    function divide(numb) {
      answer.answer = answer.answer + "I".repeat(numb);
      answer.numb = answer.numb - numb;
    }
    return answer.answer;
  },
  fromRoman: function (a) {
    let arr;
    function translete(array) {
      return array.split("");
    }
    if (
      a.indexOf("IV") === -1 &&
      a.indexOf("IX") === -1 &&
      a.indexOf("XС") === -1 &&
      a.indexOf("CM") === -1 &&
      a.indexOf("CD") === -1
    ) {
      arr = arr || [];
      arr.push(translete(a));
      arr = arr.flat();
    } else {
      arr = arr || [];

      if (a.indexOf("IV") !== -1) {
        arr.push(a.slice(a.indexOf("IV"), a.indexOf("IV") + 2));
        let newArr = a.slice(0, a.indexOf("IV")) + a.slice(a.indexOf("IV") + 2);
        newArr ? (arr = arr.concat(translete(newArr))) : {};
      }
      if (a.indexOf("IX") !== -1) {
        arr.push(a.slice(a.indexOf("IX"), a.indexOf("IX") + 2));
        let newArr = a.slice(0, a.indexOf("IX")) + a.slice(a.indexOf("IX") + 2);
        newArr ? (arr = arr.concat(translete(newArr))) : {};
        console.log(arr);
        console.log(newArr);
      }
      if (a.indexOf("XC") !== -1) {
        arr.push(a.slice(a.indexOf("XC"), a.indexOf("XC") + 2));
        let newArr = a.slice(0, a.indexOf("XC")) + a.slice(a.indexOf("XC") + 2);
        newArr ? (arr = arr.concat(translete(newArr))) : {};
      }
      if (a.indexOf("CM") !== -1) {
        console.log("тут");
        arr.push(a.slice(a.indexOf("CM"), a.indexOf("CM") + 2));
        let newArr = a.slice(0, a.indexOf("CM")) + a.slice(a.indexOf("CM") + 2);
        newArr ? (arr = arr.concat(translete(newArr))) : {};
        console.log(arr);
        console.log(newArr);
      }
      if (a.indexOf("CD") !== -1) {
        arr.push(a.slice(a.indexOf("CD"), a.indexOf("CD") + 2));
        let newArr = a.slice(0, a.indexOf("CD")) + a.slice(a.indexOf("CD") + 2);
        newArr ? (arr = arr.concat(translete(newArr))) : {};
      }
    }
    let count = 0;
    for (let char of arr) {
      count += RomanNumerals.help[char];
    }
    return count;
  },
};
console.log(RomanNumerals.fromRoman("CMLXXXIX"));
