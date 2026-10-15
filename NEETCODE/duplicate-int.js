//INSTRUCTIONS ... QUESTIONS
/*
Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

Example 1:

Input: nums = [1, 2, 3, 3]

Output: true

Example 2:

Input: nums = [1, 2, 3, 4]

Output: false

*/


//Solution

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        nums.sort((a, b) => a - b)

        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] === nums[i + 1]) {
                return true
            }
        }
        return false
    }
}

//Parameter- given an array of nums 
//Return- return a boolean
//Example [1,2,2,5,8] = true.  [1,2,3,4] = false
//Psuedocode- im thinking og using sort and then comparing a== b then return true

