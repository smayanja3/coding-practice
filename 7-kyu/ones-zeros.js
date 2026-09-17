/*Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.*/


//My Solution
const binaryArrayToNumber = arr => {
  // your code
  return parseInt(arr.join(""), 2)
  
  //Take all the 0s and 1s in the array, 
  //join them together, 
  //tell parseInt() to treat the joined value as a binary (base-2) number, 
  // Binary uses base 2 because it only has 2 possible digits:
  //convert it into a regular whole number
  //eturn the result.
};

//Different Solution

//Solution#1
function binaryArrayToNumber(arr) {
  return arr.reduce( (a, b) => a << 1 | b );
}
//Solution#2
const binaryArrayToNumber = arr => {
  return arr.reduce((total, cur) => (total = total * 2 + cur), 0);
}