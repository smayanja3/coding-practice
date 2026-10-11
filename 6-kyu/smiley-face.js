/* 
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
 */

//My Solution
//return the total number of smiling faces in the array
function countSmileys(arr) {
  const smiley = [
    ":)", ":D", ":-)", ":-D", ":~)", ":~D", ";)",
    ";D", ";-)", ";-D", ";~)", ";~D"];
  console.log(smiley)
  // checking to see if it includes so need (include method)
  
  const smileyyy = /^[:;][-~]?[)D]$/ 
  // strict borders ^= must start here $= must end here
  // [] match exactly one element inside these brackets
  // ? means optional so you can put this after the nose options []
  // also need regex.test(face) not includes becasue regex is a rule 
  
        
  
  return arr.filter(face => smiley.includes(face)).length; 
}

//Parameters - an array of smiley face symbols (no numbers no boolenas an array of symbols)
//Return - return the smile in a form of number
//Example- ([':D',':~)',';~D',':)'] = 4  or ([':)',':(',':D',':O',':;'] = 2

//Different Solution

//Solution#1
// complete the function
function countSmileys(arr) {
var smileys = [":)",";)",":-)",";-)",";~)",":~)",":D",";D",":-D",":~D",";-D",";~D"];
var count = 0;

for (var i=0; i<arr.length; i++){
  for (var j=0; j<smileys.length; j++){
    if (arr[i]===smileys[j]){
      count++;
    }
  }
  }
return count;
}
