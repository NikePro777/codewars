// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (typeof arr[j] === "number") {
      arr[j] === 0 ? ((del = arr.splice(j, 1)), i++, j--) : console.log(arr[j]);
    } else {
      console.log("а тут нет");
    }
  }
  function low() {
    if (i === 0) {
      return arr;
    } else {
      arr.push(0);
      i--, low();
    }
  }
  low();
  return arr;
}
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

// best
var moveZeros = function (arr) {
  return arr
    .filter(function (x) {
      return x !== 0;
    })
    .concat(
      arr.filter(function (x) {
        return x === 0;
      })
    );
};
// best
var moveZeros = function (arr) {
  return [...arr.filter((n) => n !== 0), ...arr.filter((n) => n === 0)];
};
//
var moveZeros = function (arr) {
  return arr.filter((val) => val !== 0).concat(arr.filter((val) => val === 0));
};
