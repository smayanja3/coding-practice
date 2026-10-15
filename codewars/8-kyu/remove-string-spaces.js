/*Write a function that removes the spaces from the string, then return the resultant string.

Examples (Input -> Output):

"8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
"8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
"8aaaaa dddd r     " -> "8aaaaaddddr"*/

//My Solution
function noSpace(x){
return x.replaceAll(' ', '')
}

//initially I  had called on the name of the function 
// (noSpace) instead of the parameter variable (x).

//.trim() removes whitespace from both ends of a string and returns a brand-new string
//.replaceAll(' ','') returns a new string with all occurrences of a specified pattern replaced by a new
// tecnichally i dont need .trim() becasue .replaceAll is already replacing all the space so i can get rid of it.
//Different Solution

//Solution#1
function noSpace(x){
  return x.replace(/\s/g, '');
}

//Solution#2
function noSpace(x){return x.split(' ').join('')}