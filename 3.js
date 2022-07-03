// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.
// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. 
// So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", 
// uses each letter in descending order.Example:
// solution('XXI'); // should return 21

function solution (roman) {
    let result = 0;

function translete(string) { //переводим римскую букву в число
    switch (string) {
        case 'M': sum =1000 
        break;
        case 'D': sum =500 
        break;
        case 'C': sum =100 
        break;
        case 'L': sum =50 
        break;
        case 'X': sum =10 
        break;
        case 'V': sum =5
        break;
        case 'I': sum =1
        break;    
}
return sum;
}

for (let i=0; i<roman.length; i++){
    translete(roman[i])
    console.log('значение цифры равно ' + sum);
    if (i>0) {
        if (translete(roman[i])>=translete(roman[i-i])){
        return result+=sum
        } else return console.log('это меньше')}
        else return result+=sum
}
return result
}
       

  console.log(solution('CCXC')); 