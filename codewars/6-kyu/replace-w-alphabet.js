/* In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
Input = "The sunset sets at twelve o' clock."
Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
 */

//My Solution

function alphabetPosition(text) {
  return text.toLowerCase().split('')
  
    .filter(char => char >= 'a' && char <= 'z') // Keep only valid alphabet letters
    .map(char => char.charCodeAt(0) - 96)      // Convert each letter to its number
    .join(' ');  
  
  return text;
}
//.charCodeAt only works on individual index
// so we had to break the string
//filter for any valid letters
//map or for each either for each character to get its corresponding value
// join it back together.


//Different Solution

//Solution#1
function alphabetPosition(text) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  
  return text.toLowerCase()
             .split('')
             .filter(t => letters.indexOf(t) > -1)
             .map(t => letters.indexOf(t)+1 || '')
             .join(' ');
}


//Solution#2
function alphabetPosition(text) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return text.toLowerCase().split('')
  .filter( letter => {
    let index = alphabet.indexOf(letter);
    return index > -1;
  }  )
  .map( letter => alphabet.indexOf(letter) + 1 )
  .join(' ')
}