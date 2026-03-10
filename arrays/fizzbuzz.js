//given a for loop from 1 to n, print "Fizz" if the number is divisible by 3, "Buzz" if it's divisible by 5, and "FizzBuzz" if it's divisible by both 3 and 5. Otherwise, print the number itself.

function fizzBuzz(i) {
    //loop through numbers from 1 to n
    for (let num = 1; num <= i; num ++) {
        //check if the number is divisible by 3 and 5, 3, or 5 and print the appropriate result
        if (num % 3 === 0 && num % 5 === 0) {
            //if the number is divisible by both 3 and 5, print "FizzBuzz"
            console.log("FizzBuzz");
            //if the number is divisible by 3, print "Fizz"
        } else if (num % 3 === 0) {
            console.log("Fizz");
            //if the number is divisible by 5, print "Buzz"
        } else if (num % 5 === 0) {
            console.log("Buzz");
        } else {
            //if the number is not divisible by 3 or 5, print the number itself
            console.log(num);
        }
}
}