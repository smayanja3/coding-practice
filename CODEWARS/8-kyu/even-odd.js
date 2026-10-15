/*Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.*/

//My Solution
function evenOrOdd(number) {
 if (number % 2 === 0) {
        return "Even";
    }
    return "Odd";
}

//Different Solution
function evenOrOdd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd';
}


//Solution#2
const evenOrOdd = (number) => number % 2 ? "Odd" : 'Even';  