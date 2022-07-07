// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.
// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s.
// So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI",
// uses each letter in descending order.Example:
// solution('XXI'); // should return 21

function solution(roman) {
  let result = 0;

  function translete(string) {
    //переводим римскую букву в число
    switch (string) {
      case "M":
        sum = 1000;
        break;
      case "D":
        sum = 500;
        break;
      case "C":
        sum = 100;
        break;
      case "L":
        sum = 50;
        break;
      case "X":
        sum = 10;
        break;
      case "V":
        sum = 5;
        break;
      case "I":
        sum = 1;
        break;
    }
    return sum;
  }

  for (let i = 0; i < roman.length; i++) {
    translete(roman[i]);
    console.log("значение цифры равно " + sum);
    if (roman[i + 1]) {
      console.log("yes");
      if (translete(roman[i + 1]) > translete(roman[i])) {
        result -= sum;
      } else {
        console.log("это меньше");
        result += sum;
      }
    } else {
      console.log("no");
      result += sum;
    }
  }
  return result;
}
console.log(solution("CCXC"));

// best practical
// function solution(roman)
// {
//   var data = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1};
//   var numbers = roman.split('');
//   var sum = 0, i;

//   for(i = 0; i < numbers.length; i++)
//   {
//     if(data[numbers[i]] < data[numbers[i+1]])
//     {
//       sum += data[numbers[i+1]] - data[numbers[i]];
//       i++;
//     }
//     else
//     {
//       sum += data[numbers[i]];
//     }
//   }

//   return sum;
// }
