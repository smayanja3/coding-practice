/*
------ TWO POINTERS ------
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
 

Constraints:

0 <= s.length <= 100
0 <= t.length <= 104
s and t consist only of lowercase English letters.
*/


// MY SOLUTION
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
//two points one moving and waiting for a comparison
    let l = 0
    let r = 0
    while((r < t.length) && (l < s.length)){
        //compare the two indeces
       if(s[l] === t[r]){
//if match than move left
        l++ 
       }
//if !== match than move right
// while loop iterates inside not like for loop in parameters
    r++
    }
    //console.log(s)
    // not the letter the number l = 3 
    return l === s.length
};

//p - given 2 strings
//r - return a boolean of weather  s and t are subsequence of each other if so return true if not return false NEW STRING
//e - 'ilove' -> ioe = true// 'candy' -> 'ync' = flase
//p looping through s and t and comparing the positions of the letters against each other

 /*    l
'a b c' = s //if l = s.length before r = t.length EXIT while loop
      r
'ahbgdc' = t // if r = t.length before l = s.length EXIT loop */