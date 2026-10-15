/* Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
 */

//My Solution
function solution(string) {
  let result = "";
  for(let i = 0; i < string.length; i++){
    if(string[i] === string[i].toUpperCase()) result += " "
    result += string[i]
  }
  return result
}

//Different Solution

//Solution#1
// complete the function
function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));

}

//Solution#2
iron-cherep
const solution = string => {
  return [...string].map((char) => {
    return (char === char.toUpperCase()) ? ` ${char}` : char;
  }).join('');
}