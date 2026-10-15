/* 
In this Kata, you will check if it is possible to convert a string to a palindrome by changing one character.

For instance:

"abbx" ==> true
// because we can convert 'x' to 'a' and get a palindrome.

"abba" ==> false
// because we cannot get a palindrome by changing any character.

"abcba" ==> true
// We can change the middle character.

"aa" ==> false

"ab" ==> true
 */

//My Solution
function solve(str) {
  // Create a variable to count how many pairs of characters don't match
  let differences = 0;
  // Loop through only the first half of the string
  // Math.floor rounds down so we don't check the middle character
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    // Compare the character at the current index (left side)
    // with the character at the opposite index (right side)
    // str.length - 1 - i lets us move backward from the end
    if (str[i] !== str[str.length - 1 - i]) {
      // If the two characters don't match, increase our counter by 1
      differences++;
    }
  }
  // If exactly one pair doesn't match,
  // we can change one character to create a pali
  if (differences === 1) {
    return true;
  }
  // If all character pairs already match AND the length is odd,
  // we can change the middle character and still have a pali
  // % 2 !== 0 checks if the string length is odd
  if (differences === 0 && str.length % 2 !== 0) {
    return true;
  }
  // If neither condition is met,
  // we cannot create a pali by changing exactly one character
  return false;
}

//we dont need to change any charcters we need to check the mismatched pairs 
//to determine if changind exactly one character would create a pali


//Perameters- given a string of letters/no numbers/ 
    //change only one letter to get a palindrome
//Return- boolean 
//Example - 'dadd' <--- true you could change a -> d or d-> a
          // 'aa' <---- false can not change one letter to make it a palindrome
//Psuedo loop through each letter of the string 



//Different Solution

//Solution#1
// complete the function
function solve(str) {
  let diff = [...str].reverse().filter((x, i) => x != str[i]).length
  return diff == 2 || (diff == 0 && str.length % 2 == 1)
}

//Solution#2
function solve(str){
    let count = 0
    let reverse = str.split('').reverse().join('')
    if ( str === reverse && str.length % 2 !== 0) {
      return true
    }
    for (let i = 0 ; i < str.length; i++) {
      if(str[i] !== reverse[i]){
        count++
      }
    }
  return count === 2 ? true : false
}