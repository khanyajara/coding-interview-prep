// Check if a string is a palindrome
function isPalindrome(s) {
    // Remove non-alphanumeric characters and convert to lowercase
    s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
    
    // Compare the string with its reverse
    let reversed = s.split('').reverse().join('');
    return s === reversed;
}
//Example usage:
let str = "A man a plan a canal Panama";
console.log(`Is "${str}" a palindrome? ${isPalindrome(str)}`);


// Check if a string is a palindrome using two-pointer technique
function isPalindromeTwoPointer(s) {
    // Remove non-alphanumeric characters and convert to lowercase
    s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}


//Example usage:
let str2 = "No 'x' in Nixon";
console.log(`Is "${str2}" a palindrome? ${isPalindromeTwoPointer(str2)}`);

// Check if a string is a palindrome using recursion
function isPalindromeRecursive(s) {
    // Remove non-alphanumeric characters and convert to lowercase
    s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
    
    // Base case: if the string is empty or has only one character, it's a palindrome
    if (s.length <= 1) {
        return true;
    }
    
    // Compare the first and last characters
    if (s[0] !== s[s.length - 1]) {
        return false;
    }
    
    // Recursively check the substring without the first and last characters
    return isPalindromeRecursive(s.slice(1, -1));
}

//Example usage:
let str3 = "A man a plan a canal Panama";
console.log(`Is "${str3}" a palindrome? ${isPalindromeRecursive(str3)}`);