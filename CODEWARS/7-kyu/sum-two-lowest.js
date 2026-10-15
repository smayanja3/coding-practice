// This code does not execute properly. Try to figure out why.


//My Solution
function sumTwoSmallestNumbers(numbers) {  
  // Code here
  console.log(Math.min(...numbers));
  // create new variables to store the results
  const lowToHigh = [...numbers].sort((a,b) => a-b)
  console.log(lowToHigh)
  const lowest = lowToHigh[0];
  const second = lowToHigh[1];
  console.log(lowest,second)
  
  const twoSum = lowest + second
  return twoSum
  }
  
  /* ORIGINAL ATTEMPT
  const twoSum = []
  const newArray = [] ;
  // grab the 1st lowest numbers remove from array
  const firstLowest = Math.min(...numbers);
  newArray.push(firstLowest)
  console.log(newArray)
  
  // grab the second lowest number remove from array
  //const secondLowest = ;
  // add them together
  // retutn the sum
}*/

//Different Solution

//Solution#1
function sumTwoSmallestNumbers(numbers){  
  numbers = numbers.sort(function(a, b){return a - b; });
  return numbers[0] + numbers[1];
};

//Solution#2
function sumTwoSmallestNumbers(numbers) {  
  return numbers.sort((a,b) => a-b).slice(0,2).reduce((a,b)=>a+b);
};