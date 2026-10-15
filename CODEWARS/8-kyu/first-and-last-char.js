/* 
Your goal is to write a function that removes the first and last characters of a string. You're given one parameter, the original string.

Important: Your function should handle strings of any length ≥ 2 characters. For strings with exactly 2 characters, return an empty string.

Examples
'eloquent' --> 'loquen'
'country'  --> 'ountr' 
'person'   --> 'erso'
'ab'       --> '' (empty string)
'xyz'      --> 'y'
*/

//My Solution
function removeChar(str){
 //You got this!
  if(str.length >= 2){
    return str.slice(1,str.length -1)
  }else if(str.length <= 2){
    return ''
  }
};

//Parameters- string no ints and or booleans
//Return- the remaining string without the first or last characters 
    //and or if the string =2 return empty string
//Example - 'eloquent'--> 'loquen'  and or 'at'--> ''empty string
//Psuedocode going to use slice to remove first and last character and 
  //also add conditionals for the 2 character string

//Different Solution

//Solution#1
function removeChar(str) {
  return str.slice(1, -1);
}

//Solution#2
function removeChar(str){
 //You got this!
  str1 = str.split('');
  str1.shift();
  str1.pop();
  return str1.join('');
    
};