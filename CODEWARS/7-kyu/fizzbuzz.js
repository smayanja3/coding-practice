/* Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
 */

//My Solution
function fizzbuzz(n)
{
  const newArr = []
  for(let i = 1; i <= n; i++){
    if(i % 3 === 0 && i % 5 === 0) {
      newArr.push('FizzBuzz');
    } else if(i % 3 === 0) {
      newArr.push('Fizz');
    } else if(i % 5 === 0) {
      newArr.push('Buzz');
    } else newArr.push(i);
  }
  return newArr
}

//Different Solution

//Solution#1
// complete the function
function fizzify(i) {
  if (i % 15 == 0)
    return 'FizzBuzz';
  else if (i % 5 == 0)
    return 'Buzz';
  else if (i % 3 == 0)
    return 'Fizz';
  else
    return i;
}

// Return an array
function fizzbuzz(n) {
  var res = [];
  for (var i = 1; i <= n; ++i) res.push(fizzify(i));
  return res;
}

//Solution#2
function fizzbuzz(n)
{
  var i = 1, arr = [];
  while(i <= n) {
    var fizz = (i % 3 == 0);
    var buzz = (i % 5 == 0);
    if(fizz || buzz) {
      arr.push((fizz?"Fizz":"") + (buzz?"Buzz":""));
    }
    else {
      arr.push(i);
    }
    i++;
  }
  return arr;
}

var fizzify = fizzbuzz;