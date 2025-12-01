// Frequency Counter - validAnagram
// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false; 
    }
    let freqCounter = {};

    for (let char of str1) {
        freqCounter[char] = (freqCounter[char] || 0) + 1;
    }

    for(let char of str2) {
        if (!freqCounter[char]) {
            return false;
        }
        if (freqCounter[char]) {
            freqCounter[char] -= 1; 
        }
    }
    return true;
}

console.log(validAnagram('cinema', 'iceman')); // true
console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram("rat","car")) // false
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')) // false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true