/* 
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
 */

//My Solution
function accum(s) {
    // your code
    let letters = s.split('')

    // the str current is = one letter so we do to UpperCase
    // str.repeat  is the following letter == index +1
    let result = letters.map((str, index) => {
        return str.toUpperCase() + str.toLowerCase().repeat(index)
    })

    return result.join('-');
}

///map() creates a new array by looping/ transforming
//.repeat(index) each letter = correct # of index +1
// join() combined it all with - seperator


//Different Solution

//Solution#1
function accum(s) {
  var array = [];
  for (i = 0; i < (s.length); i++) {
    array.push(s.charAt(i).toUpperCase() + s.charAt(i).toLowerCase().repeat(i));
  };
  return array.join("-");
}
