/* 
Given two arrays of integers m and n, test if they contain at least one identical element. Return true if they do; false if not.

Your code must handle any value within the range of a 32-bit integer, and must be capable of handling either array being empty (which is a false result, as there are no duplicated elements).

 */

//My Solution
function duplicateElements(m, n) {
   // check if SOME element in m is included in n
    return m.some(element => n.includes(element))
  // bool: true or false
}
   
//Different Solution

//Solution#1
// complete the function
function duplicateElements(m, n) {
  return m.some(v => n.includes(v))
}

//Solution#2
const duplicateElements = (arr, arr2) => arr.map(el => arr2.filter(e => e === el).length > 0).includes(true)