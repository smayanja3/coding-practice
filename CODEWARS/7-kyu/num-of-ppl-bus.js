/* 
There is a bus moving in the city which takes and drops some people at each bus stop.

You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.

*/


//My Solution
// return masked string
var number = function(busStops){
  // Good Luck!
 return busStops.reduce((acc,[a,b])=> acc + a-b,0);
  console.log(busStops)
  //[10,0] === [a,b]
}

//const sumWithInitial = array.reduce(
  //(accumulator, currentValue) => accumulator + currentValue,
 // initialValue,

//perameters- integers whole numbers always positive no string no boolean
//return - num of people == last stop pair[get on, get off]
//example [[6,2],[2,0],[1,4]] = 3 at the last stop
//psuedocode im going to subtract the pairs in the nested array from each other and then
//add those number to each other to get the final num of people at the bus stop
// need to break the nested array from each other so im able to target and subtract the 
// nums in each first

//Different Solution

//Solution#1
const number = busStops => busStops.reduce((p,n) => p+n[0]-n[1],0)

//Solution#2
// return masked string
var number = function(busStops){
	var totalPeople = 0;
  for (var i=0; i<busStops.length; i++) {
  	totalPeople += busStops[i][0];
    totalPeople -= busStops[i][1];
  }
  return totalPeople;
}

