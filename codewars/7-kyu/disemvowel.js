/*Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

StringsRegular ExpressionsFundamentals*/

//My Solution
function disemvowel(str) {
  return str.replaceAll(/[aeiou]/gi, '');
}


//Different Solution

//Solution#1
const vowels = 'aeiou';

function disemvowel(str) {
  return str
    .split('')
    .filter(letter => !vowels.includes(letter.toLowerCase()))
    .join('');
}

//Solution#2
function disemvowel(str) { 
str=str.replace(/[a\e\i\u\o\A\E\I\O\U]/g,"")
return str;
}