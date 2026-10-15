//Clock shows h hours, m minutes and s seconds after midnight.

/*Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59*/




//My Solution
function past(h, m, s){
  //#Happy Coding! ^_^
  //Convert hours to milliseconds
  let hr = h * 3600000
  //Convert minutes to milliseconds
  let min = m * 60000
  //Convert seconds to milliseconds
  let sec = s * 1000
  //Add the calculations together 
  let total = hr + min + sec
  //Return the total
  return total
}


//Different Solution
//Solution#1
function past(h, m, s){
  return ((h*3600)+(m*60)+s)*1000;
}
//Solution#2
const past = (h,m,s) => 1000 * (3600 * h + 60 * m + s);