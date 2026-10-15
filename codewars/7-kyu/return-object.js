/*Create a function that returns the values of an object which are numbers, and the keys of objects which have methods as values.

array should return numbers first then all the method names in the order they are in the object
strings, booleans, arrays should be ignored.
if the object is empty, then the array should return the following string: The Object is Empty
Example:

returnSpecifics({a:1,b:'str',c:2,d:true,e:function(a){return a;},f:3})
This would return [1,2,3,'e']*/ 

//My Solution
function returnSpecifics(obj) {
    const keys = Object.keys(obj);
    
    // check if the object is empty return 0
    if (keys.length === 0) {
       return ["The Object is Empty"];
    }
    // create new variables to store the results
    const numbers = [];
    const methods = [];
    // look through each key and object and do this -->
    for (let key of keys) {
        const value = obj[key];
        
        // Check if value is a number and then save it
        if (typeof value === 'number') {
            // push(add to the numberList area)
            numbers.push(value);
        } 
        // Check if value is a method and then save it
        else if (typeof value === 'function') {
            methods.push(key);
        }
        // Strings, booleans, arrays, etc., are automatically ignored
    }
    
    // Return numbers and methods together numbers first
    return [...numbers,...methods];
}
//Different Solution

//Solution#1
const returnSpecifics = obj =>
  (arr => arr.length ? arr : [`The Object is Empty`])
  ([...Object.values(obj).filter(val => typeof val === `number`), ...Object.keys(obj).filter(val => typeof obj[val] === `function`)]);


