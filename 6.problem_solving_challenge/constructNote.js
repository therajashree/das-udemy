// Frequency Counter - constructNote
// Write a function called constructNote, which accepts two strings, a message and some letters. 
// The function should return true if the message can be built with the letters that you are given, 
// or it should return false.

// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

// Bonus Constraints:

// If M is the length of message and N is the length of letters:

// Time Complexity: O(M+N)

// Space Complexity: O(N)

function constructNote(msg, letters) {
    let counter = {};

    for(let char of letters) {
        counter[char] = (counter[char] || 0) + 1;
    }

    for (let char of msg) {
        if(!counter[char]) {
            return false;
        }
        counter[char] -=  1;
       
    }

    for(let key in counter) {
        if (counter[key] < 0) {
            return false;
        }
    }

    return true;
}


console.log(constructNote('aa', 'abc')) // false
console.log(constructNote('abc', 'dcba')) // true
console.log(constructNote('aabbcc', 'bcabcaddff')) // true

// node constructNote.js