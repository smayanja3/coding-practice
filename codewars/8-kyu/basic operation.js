/* 
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7

*/


//My Solution
// return masked string
function basicOp(op, val1, val2){
  if(op == '+'){
    return val1 + val2
  }else if(op == '/'){
    return val1 / val2
  }else if(op == '-'){
    return val1 - val2
  }else if(op == '*'){
    return val1 * val2
  }
  return 0;
}

//Different Solution

//Solution#1
function basicOp(o, a, b) {
  return eval(a+o+b);
}

//Solution#2
// return masked string
const basicOperations = {
  '+': (a,b) => a + b,
  '-': (a,b) => a - b,
  '*': (a,b) => a * b,
  '/': (a,b) => a / b,
}

const basicOp = (op, x, y) => basicOperations[op](x, y)

