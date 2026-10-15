/* 
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!
 */

//My Solution
function createPhoneNumber(numbers){
  // use splice on arr
  //join the numbers per section
  console.log(numbers)  
  //slice(start, end)
  const code = numbers.slice(0,3).join('')
  const mid = numbers.slice(3,6).join('')
  const end = numbers.slice(6,10).join('')
  console.log(code, mid, end)
  
  return `(${code}) ${mid}-${end}`
  // join()
  
}
//Different Solution

//Solution#1
function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}
//Solution#2
function createPhoneNumber(numbers){
  return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}