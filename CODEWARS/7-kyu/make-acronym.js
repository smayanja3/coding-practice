/*
Write function which takes a string and make an acronym of it.

Rule of making acronym in this kata:

split string to words by space char
take every first letter from word in given string
uppercase it
join them toghether
Eg:

Code wars -> C, w -> C W -> CW
*/

//My Solution
function toAcronym(inp){
  return inp.split(' ').map(word=>word.charAt(0).toUpperCase()).join('')
}
//cut string in half using Math.floor()rounds down

//Different Solution

//Solution#1
function toAcronym( input ){
  return input.split(' ')
              .map(function(item) {
                 return item[0].toUpperCase();
              })
              .join('');
}


//Solution#2
function toAcronym( input ){
  return input.replace(/(\w).*?\b[^\w]*/g,"$1").toUpperCase()
}