/* 
Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

*/


//MY SOLUTIONS
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0 || (x % 10 === 0 && x !== 0)){
        return false
    }
    // 100 || 001 

    let current = x

    let rev = 0

while(x > 0){
    // first digit of the number
    let num = x % 10
    rev = rev * 10 + num
    x = Math.floor(x / 10)
    //console.log(x)
}
return current === rev
// console.log(rev)

    
    
    
    
    // //original answer
    // let rev = x.toString().split('').reverse().join('')
    // console.log(rev)

    // if(x === Number(rev)){
    //     return true
    // }
    // return false
};
//P - given a Number neg nad positive
//R -  a boolean if the if x is a palindrome
//E - 152 -> 251 != pali.   242 -> 242 == pali
//P -  convert the num to a string becuase split is a string method
// then reverse the string and join it back together and then convert it back to a num
//check if it is a palindrome