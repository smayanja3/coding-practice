/* You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

If the string's length is odd, return the middle character.
If the string's length is even, return the middle 2 characters.
Examples:
"test" --> "es"
"testing" --> "t"
"middle" --> "dd"
"A" --> "A"
 */

//My Solution
function getMiddle(str) {
  //Code goes here!
  const middle = Math.floor(str.length / 2) //rounds up 
  
  //If length is even, return 2 characters.
  if(str.length % 2 === 0){
    return str[middle -1] + str[middle] 
    //because math.floor rounds up i have to take that out and then add middle again
    //If odd, return 1 character.
  }
    return str[middle];
}

//cut string in half using Math.floor()rounds down

//Different Solution

//Solution#1
function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}
//Solution#2
function getMiddle(s) {
  var middle = s.length / 2;
  return (s.length % 2) 
    ? s.charAt(Math.floor(middle))
    : s.slice(middle - 1, middle + 1);
}