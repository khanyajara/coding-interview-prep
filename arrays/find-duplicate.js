//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

var containsDuplicate = function(nums) {
    //create a set to store unique numbers
    const uniqueNumbers = new Set();

    //loop through the array
    for (const num of nums) {
        //if the number is already in the set, return true
        if (uniqueNumbers.has(num)) {
            return true;
        }
        //otherwise, add the number to the set
        uniqueNumbers.add(num);
    }

    //if we reach this point, there are no duplicates
    return false;
}
