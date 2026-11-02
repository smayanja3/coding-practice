/* 
You are given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9

Output: [0,1]

Explanation:

The sum of nums[0] and nums[1] is 2 + 7 = 9, which equals the target. Therefore, the indices [0, 1] are returned.
*/


//MY SOLUTIONS
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

for(let i = 0; i < nums.length; i++){
    for(let j = i + 1; j < nums.length; j++){
        if(nums[i] + nums[j] === target){
            return [i,j]
        }
    }
}
    
};
//P - given an array of numbers 
//R -  return the indeced of the numbers that equal the sum of the target
//E - [1,4,8,10] target 11 so [0,3]
//P -  have to for loops first loop checks the firt number and the secondwil check all numbers after the first one and compare the sums til we find one 