/*In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.*/


//My Solution
function highAndLow(numbers){
  // ...
  const nums = numbers.split(' ')
  let newArr = [ ]
  nums.forEach(function(num){
    newArr.push(Number(num))
  }) 
  let max = newArr[0]
  let min = newArr[0]
  newArr.forEach(function(num){
    if(num > max){
      max = num
    }
    if(num < min){
      min = num
    }
  })
  return max+' '+min
  //return `${max} ${min}`
}

// split the numbers into a string
// make them numbers again
// make a new array
// then find the max and min
// return string

//Different Solution

//Solution#1
function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
} 
//origionaly how I tried to do it

//Solution#2
function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}