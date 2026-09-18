/*Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts a non-negative integer and returns an integer.

Happy Coding!*/

//My Solution
function squareDigits(num){
  const str = num.toString().split('')
  const square = str.map((number) => number * number)
  //console.log(square)
  return Number(square.join(''))
  //const mapped = array.map((x) => x * 2);
  
  //return str;
}
//string to array
//square each by using map
// string join()
// return square



//Different Solution

//Solution#1
function squareDigits(num){
  return +num.toString().split('').map(i => i*i).join('');
}
//Solution#2
const squareDigits = (num) => Number((num + '').split("").map(c => c *c).join(""));
