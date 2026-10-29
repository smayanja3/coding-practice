/* 
A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcissistic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1652 (4 digits), which isn't:

    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
The Challenge:

Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.

This may be True and False in your language, e.g. PHP.

Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.
 */

//My Solution
function narcissistic(value) {
  // Code me to return true or false
  //breaking the number to a string and then mapping through it as a number
  const dig = String(value).split('').map(Number)
  const power = dig.length
  const sum = dig.reduce((acc, curr) => acc + Math.pow(curr, power), 0)
  return sum === value // -> returns a boolean
  
//   if( sum === value ){
//     return true
//   }
//  return false
}

//Math.pow(base, exponent)



//p- positive integers 
//r- return the sum of the number raised by its length of digits
//e- 128 = 1^3 2^3 8^3 = 3 + 8 + 24 = 35 !== narcissictic number
//p- split each number raise each number by its digit length then
// add those values and compare it to the origianal number

//Different Solution

//Solution#1
// complete the function
function narcissistic( value ) {
  var remaining = value,
      digits = [],
      solution = 0;
  while (remaining > 0) {
    digits.push(remaining % 10);
    remaining = Math.floor(remaining / 10);
  }
  
  return value == digits.reduce(function(p,n) {
    return p + Math.pow(n,digits.length);
  },0);
}

//Solution#2
function narcissistic( value ) {
  var str = value.toString();
  var sum = 0;
  for (var it = 0; it < str.length; ++it)
  {
    sum += Math.pow(parseInt(str[it]), str.length);
  }
  if (sum == value)
  {
    return true;
  }
  else
  {
    return false;
  }
}