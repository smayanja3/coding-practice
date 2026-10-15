/*An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)*/

//My Solution
function isIsogram(str) {
  str = str.toLowerCase();
  let current = '';

  for (let i = 0; i < str.length; i++) {
    // If the letter is already in our tracked string, it's a duplicate
    if (current.includes(str.at(i))) {
      return false; 
    }
    // Otherwise, remember this letter and keep checking
    current += str.at(i);
  }

  // If the loop finished without returning false, it is an isogram
  return true;
}

//Different Solution

//Solution#1
function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}

//Solution#2
function isIsogram(str) {
  var map = {};
  var result = true;
  str.split('').forEach(function(char) {
    if (map[char.toUpperCase()] === undefined) {
      map[char.toUpperCase()] = 1;
    } else {
      result = false;
    }
  });
  return result;
}