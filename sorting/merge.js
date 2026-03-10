//Merge Sort implementation in JavaScript
function mergeSort(arr) {
    //Base case: if the array has only one element or is empty, return it
    if (arr.length <= 1) {
        return arr;
    }

    //Divide the array into two halves
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    //Recursively sort both halves
    left = mergeSort(left);
    right = mergeSort(right);

    //Merge the sorted halves
    return merge(left, right);
}

//Helper function to merge two sorted arrays
function merge(left, right) {
    let merged = [];
    let i = 0;
    let j = 0;

    //Compare elements from both arrays and add the smaller one to the merged array
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            merged.push(left[i]);
            i++;
        } else {
            merged.push(right[j]);
            j++;
        }
    }

    //Add any remaining elements from either array
    return merged.concat(left.slice(i)).concat(right.slice(j));
}

//Example usage:
let array = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", array);
let sortedArray = mergeSort(array);
console.log("Sorted array:", sortedArray);
