// A format for expressing an ordered list of integers is to use a comma separated list of either
// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the
// interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.
// Example:
// solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// // returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"

function solution(list) {
  let n = list.sort((a, b) => a - b);
  let answer = (elem = []);
  for (let i = (k = 0); i < n.length; i++) {
    if (n[i] + 1 === n[i + 1]) {
      for (j = i, k = 0; n[j] + 1 === n[j + 1]; j++) {
        k++;
      }
      if (k >= 2) {
        answer.push(`${n[i]}-${n[i + k]}`);
        i += k;
      } else {
        answer.push(n[i]);
      }
    } else {
      answer.push(n[i]);
    }
  }
  return answer.join();
}

console.log(
  solution([
    -9, -10, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18,
    19, 20,
  ])
);
// best practik
function solution(list) {
  for (var i = 0; i < list.length; i++) {
    var j = i;
    while (list[j] - list[j + 1] == -1) j++;
    if (j != i && j - i > 1) list.splice(i, j - i + 1, list[i] + "-" + list[j]);
  }
  return list.join();
}
// best
solution = (list) =>
  list.reduce((acc, curr, i) => {
    if (i == 0) return curr.toString();
    if (list[i - 1] == curr - 1 && list[i + 1] == curr + 1) return acc;
    if (list[i - 2] == curr - 2 && list[i - 1] == curr - 1)
      return acc + "-" + curr;
    return acc + "," + curr;
  });
//
const solution = (list) =>
  list
    .map((val, idx) =>
      list[idx - 1] === val - 1 && list[++idx] === val + 1 ? `~` : val
    )
    .join(`,`)
    .replace(/,?(~,)+/g, `-`);
