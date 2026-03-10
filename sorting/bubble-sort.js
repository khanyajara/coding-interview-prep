//Bubble Sort implementation in JavaScript
function bubbleSort(arr) {
    let n = arr.length;
    //Outer loop for number of passes
    for (let i = 0; i < n - 1; i++) {
        //Inner loop for comparisons in each pass
        for (let j = 0; j < n - i - 1; j++) {
            //Swap if the element found is greater than the next element
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

//Example usage:
let array = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", array);
let sortedArray = bubbleSort(array);
console.log("Sorted array:", sortedArray);

