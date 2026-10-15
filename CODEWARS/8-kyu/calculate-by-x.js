/*Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).

Examples
x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10]
x = 2, n = 5  --> [2,4,6,8,10]*/

//My Solution
function countBy(x, n) {
  let z = [];
    for (let i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
}

// x → the number we want multiples of
// n → how many multiples we want
// .push(...) → put that result into the array



//Different Solution

//Solution#1
function countBy(x, n) {
    var z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}

//Solution#2
const countBy = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x)