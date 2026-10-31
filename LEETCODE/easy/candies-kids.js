/* 
There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

Note that multiple kids can have the greatest number of candies.

Example 1:

Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true] 
Explanation: If you give all extraCandies to:
- Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
- Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
- Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
- Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
- Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.

*/


//MY SOLUTION
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
let arr = []
// had to use filter to give me a shallow copy of the original array so that i could sort the shallow copy every time and not i sorted array to compar to.
let order = candies.filter((candy) => true).sort((a,b) => b - a)[0]
//=== candies.sort((a,b) => b - a)
    for(let i = 0; i < candies.length; i++){
        //console.log(candies[i], extraCandies)
        //console.log(candies)
        // also moved order outside of the loop to optimize it as its not changing!!
        if(candies[i] + extraCandies >= order){
            arr.push(true)
           //console.log(arr) 
        } else {
            arr.push(false)
        }
    }
    return arr
};

//const result = words.filter((word) => word.length > 6);
//p - given an array= which the index is the number of candies that index child has
//r return a boolean in array form if the kid is given the extra candies wheather or not they will have the most among the others
//e candies [2,3,1] extra = 3  result =[5,6,4] = [t,t,t]
//p i will need to loop through each array and add the extra candies while also comparing its result to the other indexes and return a boolean 
// for loop/ sort b-a to check if current indec is first if not return false in result array