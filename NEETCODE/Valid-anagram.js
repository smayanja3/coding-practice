//INSTRUCTIONS ... QUESTIONS
/*
Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

Two strings are anagrams if they contain the same characters, with each character appearing the same number of times, regardless of order.


Example 1:

Input: s = "racecar", t = "carrace"

Output: true

Example 2:

Input: s = "jar", t = "jam"

Output: false

Example 3:

Input: s = "x", t = "x"

Output: true
*/


//Solution

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let swabi = s.split('').sort().join('')
        let tim = t.split('').sort().join('')
        console.log(swabi)
        // if(swabi.sort() === tim.sort()){
        //     console.log(swabi.sort())
        //     console.log(tim.sort())
        // }

    return swabi === tim
}
}

/*parameters- give 2 strings no numbers 
//return- a boolean weather or not the 2 strings are anagrams of eachother
//example- 'car' and 'arc' - true//// 'fox' and 'box' - false
//psuedocode - i have to split he string into an array to sort it nad then 
//join it back //together nad then compare the two */
