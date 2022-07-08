// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!
// Here's the deal:
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
function generateHashtag(str) {
  n = str.split(" ");
  let string = "#";
  for (let i = 0; i < n.length; i++) {
    let word = n[i].charAt(0).toUpperCase();
    string += `${word}${n[i].slice(1)}`;
  }
  if (string.length < 141 && string.length > 1) {
    return string;
  } else {
    return false;
  }
}

console.log(generateHashtag("a".repeat(139)));

// best practic
// function generateHashtag (str) {
//   return str.length > 140 || str === '' ? false :
//     '#' + str.split(' ').map(capitalize).join('');
// }

// function capitalize(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }
