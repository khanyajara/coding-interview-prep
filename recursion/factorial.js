//To calculate the factorial of a number in JavaScript using recursion, you need a function that calls itself with a smaller input until it reaches a base case. The base case stops the recursion and prevents an infinite loop


function factorail(n) {
    //Base case: if n is 0, return 1 (since 0! is defined as 1)
    return n === 0 ? 1 : n * factorail(n - 1);
}
//Example usage:
let num = 10;
//Calculate the factorial of num and store the result in a variable
let result = factorail(num);
console.log(`The factorial of ${num} is ${result}`);