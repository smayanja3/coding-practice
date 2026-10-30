/* 
Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates). Only positive integers in the range of 1 to 9 will be passed to the function.

Examples
[1, 3, 1] ==> 13
[5, 7, 5, 9, 7] ==> 579
[1, 9, 3, 1, 7, 4, 6, 6, 7]  ==> 134679
 */

//My Solution
function minValue(values){
  //your code here
  let sorted = values.sort((a,b) => a - b)
  console.log(values)
  // sort the array from small -> large
  let self = sorted.filter((num, index) => {
    // removes the duplicate using filter
    return sorted.indexOf(num) === index
  })
  // join then back together
  let result = self.join('')
  // convert to a number
  return Number(result)
}


//Different Solution

//Solution#1
function minValue(values){
  return Number(Array.from(new Set(values)).sort().join(''))
}
