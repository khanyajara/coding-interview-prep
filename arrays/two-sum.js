 //Brute Force Approach
 

 //function that finds two numbers in an array that add up to a target 
 function  twosum(nums, target) {
    //loop through every element in the array
    for (let i = 0; i < nums.length; i++) {

        //Second loop starts at the next element after i
        //this prevents comparing the same element with itself and avoid duplicate comparsions
        for (let j = i + 1; j < nums.length; j++) {
            //check if the sum of the two elements equals the target
            if (nums[i] + nums[j] === target) {
                // if it does, return the indices of the two elements as an array
                return [i, j];
            }
        }
    }
 } 

//Optimized Approach using a Hash Map

//functions that finds two numbers in an array that add up to a target
 function twosum(nums, target) {

    //Crreate a Map to store numbers and their indices as we iterate through the array
    const numberMap = new Map();

    //Loop through the array once
    for (let i = 0; i < nums.length; i++) {

        //Calculate the complement by subtracting the current number from the target
        const complement = target - nums[i];

        //Check if the complement exists in the Map
        if (numberMap.has(complement)) {

            //Return the index of the complement and the current undex
            return [numberMap.get(complement), i];
        }

        //if complement does not exist, store the current number and its index.
        numberMap.set(nums[i], i);
    }
}