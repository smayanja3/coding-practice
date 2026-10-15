// This code does not execute properly. Try to figure out why.


//My Solution
function multiply(a, b){
  return a * b
}


//Different Solution

//Solution#1
const multiply = (a, b) => a * b;

//Solution#2
function multiply(a, b){
  if (!a || !b || typeof(a) != "number" || typeof(b) != "number") {
    return 0;
  }
  return a * b;
}