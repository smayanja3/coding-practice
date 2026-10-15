//Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

//The geese are any strings in the following array, which is pre-populated in your solution:

//["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
//For example, if this array were passed as an argument:

 //["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

 //Your function would return the following array: ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

/*The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.*/

// My Solution
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let arr = [];
  
  for (let i = 0; i < birds.length; i++) {
    if (geese.includes(birds[i]) === false) {
      arr.push(birds[i]);
    }
  }
  
  return arr;
}

//Pseudocode
    //- return an array containing all of the strings in the input array except those that match strings in geese
    //- if the birds are not in the geese already then keep them if there are duplicates remove it
    //-this is helping us move through the input array and check each bird against the geese list


//Different Solution


//Solution#1: Using Array.prototype.filter() with Array.prototype.includes()
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(b => !geese.includes(b));
};


//Solution#2: Using Array.prototype.filter() with Array.prototype.indexOf()
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter( bird => geese.indexOf(bird) < 0 );
};