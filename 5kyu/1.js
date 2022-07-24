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

// let RomanNumerals = {
//   help: {
//     I: 1,
//     IV: 4,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//     IX: 9,
//     CM: 900,
//   },
//   toRoman: function (numb) {
//     console.log("toRoman: " + numb);
//     let answer = { numb: numb, answer: "" };
//     while (answer.numb > 0) {
//       answer.numb >= 900
//         ? divide1000(answer.numb)
//         : answer.numb >= 400
//         ? divide500(answer.numb)
//         : answer.numb >= 90
//         ? divide100(answer.numb)
//         : answer.numb >= 40
//         ? divide50(answer.numb)
//         : answer.numb >= 9
//         ? divide10(answer.numb)
//         : answer.numb >= 4
//         ? divide5(answer.numb)
//         : divide(answer.numb);
//     }
//     function divide1000(numb) {
//       numb / 1000 >= 1
//         ? ((answer.numb = answer.numb - 1000),
//           (answer.answer = answer.answer + "M"))
//         : numb / 900 >= 1
//         ? ((answer.numb = answer.numb - 900),
//           (answer.answer = answer.answer + "CM"))
//         : {};
//     }

//     function divide500(numb) {
//       if (numb / 500 >= 1) {
//         (answer.numb = answer.numb - 500),
//           (answer.answer = answer.answer + "D");
//       } else {
//         numb / 400 >= 1
//           ? ((answer.numb = answer.numb - 400),
//             (answer.answer = answer.answer + "CD"))
//           : {};
//       }
//     }
//     function divide100(numb) {
//       if (numb / 100 >= 1) {
//         (answer.numb = answer.numb - 100),
//           (answer.answer = answer.answer + "C");
//       } else {
//         numb / 90 >= 1
//           ? ((answer.numb = answer.numb - 90),
//             (answer.answer = answer.answer + "XC"))
//           : {};
//       }
//     }
//     function divide50(numb) {
//       if (numb / 50 >= 1) {
//         (answer.numb = answer.numb - 50), (answer.answer = answer.answer + "L");
//       } else {
//         numb / 40 >= 1
//           ? ((answer.numb = answer.numb - 40),
//             (answer.answer = answer.answer + "XL"))
//           : {};
//       }
//     }
//     function divide10(numb) {
//       if (numb / 10 >= 1) {
//         (answer.numb = answer.numb - 10), (answer.answer = answer.answer + "X");
//       } else {
//         numb / 9 >= 1
//           ? ((answer.numb = answer.numb - 9),
//             (answer.answer = answer.answer + "IX"))
//           : {};
//       }
//     }
//     function divide5(numb) {
//       if (numb / 5 >= 1) {
//         (answer.numb = answer.numb - 5), (answer.answer = answer.answer + "V");
//       } else {
//         numb / 4 >= 1
//           ? ((answer.numb = answer.numb - 4),
//             (answer.answer = answer.answer + "IV"))
//           : {};
//       }
//     }
//     function divide(numb) {
//       answer.answer = answer.answer + "I".repeat(numb);
//       answer.numb = answer.numb - numb;
//     }
//     return answer.answer;
//   },
//   fromRoman: function (a) {
//     let arr;
//     count = 0;
//     function translete(array) {
//       return array.split("");
//     }
//     console.log(a.indexOf("XC"));
//     if (
//       a.indexOf("IV") === -1 &&
//       a.indexOf("IX") === -1 &&
//       a.indexOf("XC") === -1 &&
//       a.indexOf("CM") === -1 &&
//       a.indexOf("CD") === -1 &&
//       a.indexOf("XL") === -1
//     ) {
//       console.log("sdfsadsaf");
//       arr = arr || [];
//       arr.push(translete(a));
//       arr = arr.flat();
//     } else {
//       console.log(a);
//       if (a.indexOf("IV") !== -1) {
//         a = a.slice(0, a.indexOf("IV")) + a.slice(a.indexOf("IV") + 2);
//         count += 4;
//       }
//       if (a.indexOf("IX") !== -1) {
//         a = a.slice(0, a.indexOf("IX")) + a.slice(a.indexOf("IX") + 2);
//         count += 9;
//       }
//       if (a.indexOf("XC") !== -1) {
//         a = a.slice(0, a.indexOf("XC")) + a.slice(a.indexOf("XC") + 2);
//         count += 90;
//       }
//       if (a.indexOf("XL") !== -1) {
//         console.log("nen");
//         a = a.slice(0, a.indexOf("XL")) + a.slice(a.indexOf("XL") + 2);
//         count += 40;
//       }
//       if (a.indexOf("CM") !== -1) {
//         a = a.slice(0, a.indexOf("CM")) + a.slice(a.indexOf("CM") + 2);
//         count += 900;
//       }
//       if (a.indexOf("CD") !== -1) {
//         a = a.slice(0, a.indexOf("CD")) + a.slice(a.indexOf("CD") + 2);
//         count += 400;
//       }
//     }
//     console.log(arr);
//     for (let char of a) {
//       count += RomanNumerals.help[char];
//     }
//     return count;
//   },
// };

// best practic

// var numerals = [
//   ["M", 1000],
//   ["CM", 900],
//   ["D", 500],
//   ["CD", 400],
//   ["C", 100],
//   ["XC", 90],
//   ["L", 50],
//   ["XL", 40],
//   ["X", 10],
//   ["IX", 9],
//   ["V", 5],
//   ["IV", 4],
//   ["I", 1],
// ];

// RomanNumerals = {
//   toRoman: function (v) {
//     var s = "";
//     numerals.forEach(function (n) {
//       // Проходимся по каждому элементу в массиве массивов чисел
//       while (v >= n[1]) {
//         // Смотрим, если элемент в массиве больше чем наще число
//         s += n[0]; // тогда в ответе ставим букву этого числа
//         v -= n[1]; // а его значение вычитаем из первоначального числа
//       }
//     });
//     return s;
//   },
//   fromRoman: function (s) {
//     var v = 0; // наше число
//     numerals.forEach(function (n) {
//       console.log(n);
//       console.log(n[0].length);
//       // проходимся по каждому элементу массива чисел
//       while (s.substr(0, n[0].length) == n[0]) {
//         console.log("s.substr(0, n[0].length)" + s.substr(0, n[0].length));
//         console.log("n[0] " + n[0]);
//         // Это длина именно названия (т.е. I -длина 1, а IV - уже 2)
//         // Получается мы берем наибольший элемент в нашем массиве чисел, вырезаем его (М,1000)
//         // и в зависимости от его длины вырезаем столько же букв в нашем слове.
//         // Далее если они одинаковы, то саму букву добавляем к ответу, а из исходного слова вырезаем эту букву
//         s = s.substr(n[0].length);
//         v += n[1];
//       }
//     });
//     return v;
//   },
// };
// console.log(RomanNumerals.fromRoman("DCLXLII"));

// best2
const map = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

class RomanNumerals {
  static toRoman(num) {
    let str = "";
    for (var i in map) {
      while (num >= map[i]) {
        str += i;
        num -= map[i];
      } // Здесь в целом логика такая же, если число у нас, больше чем число в обьекте элементов - то вычитаем
    }
    return str;
  }

  static fromRoman(str) {
    return str
      .match(/CM|CD|XC|XL|IX|IV|\w/g)
      .reduce((acc, el) => acc + map[el], 0);
    // .match ВЫВОДИТ МАССИВ совпадений. вот так просто выглядит разбиение элементов.
    // А дальше мы просто каждый элемент суммируем с его значением в массиве чисел
  }
}
console.log(RomanNumerals.fromRoman("DLVIV"));
