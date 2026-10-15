//Description
/*Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'*/

//My Solution
function solution(str){
 const reverse = str.split('').reverse('').join('')
 return reverse;
}

//Different Solutions
const solution = str => str.split('').reverse().join('');



//Solution #2
const solution = s => [...s].reverse().join('')