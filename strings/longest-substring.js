// Find the longest substring without repeating characters
function longestSubstring(s) {
    let charSet = new Set();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}
//Example usage:
let str = "abcabcbb";
console.log(`The length of the longest substring without repeating characters in "${str}" is ${longestSubstring(str)}`);

// Find the longest substring without repeating characters using a map to store the last index of each character
function longestSubstringWithMap(s) {
    let charIndexMap = new Map();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        if (charIndexMap.has(s[right])) {
            left = Math.max(left, charIndexMap.get(s[right]) + 1);
        }
        charIndexMap.set(s[right], right);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}
//Example usage:
let str2 = "abcabcbb";
console.log(`The length of the longest substring without repeating characters in "${str2}" is ${longestSubstringWithMap(str2    )}`);