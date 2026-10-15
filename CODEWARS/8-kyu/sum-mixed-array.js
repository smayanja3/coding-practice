/*Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.*/

//My Solution
function sumMix(x) {
  let sum = 0;

  for (let i = 0; i < x.length; i++) {
    sum += Number(x[i]);
  }

  return sum;
}


//Solution#1
function sumMix(x){
  return x.map(a => +a).reduce((a, b) => a + b);
}

//Solution#2
function sumMix(x){
  let result = 0;
  for (let n of x) {
    result += parseInt(n);
  }
  return result;
}