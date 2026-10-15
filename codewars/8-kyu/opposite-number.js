/*Very simple, given a number, find its opposite (additive inverse).

Examples:

1: -1
14: -14
-34: 34*/


//My Solution
function opposite(number) {
  //your code here
  const inverse = number * -1
  return inverse;
}
//Different Solution

//Solution#1
function opposite(number) {
  return(-number);
}

//Solution#2
function opposite(number) {
  return number > 0 ? -number : Math.abs(number);
}