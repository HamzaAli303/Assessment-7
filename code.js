// 1) Sum Zero

// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise


function numbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return true;
            } else {
            }
        }
    }
    return false;
}
console.log(numbers([1, 2, 3,]));
// This is a O(n). The runtime would increase as the array gets larger.
// Extra credit: The space complexity is O(n) since the size of the set will increase proportionally with the growth of the array.

// 2) Unique Characters

// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

function hasUniqueCharacters(word) {
    const characters = new Set();
    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (characters.has(char)) {
            return false;
        }
        characters.add(char);
    }
    return true;
};

console.log(hasUniqueCharacters('Moonday'));
// This is O(n) because it has a single loop
// Extra Credit: The space complexity is O(n) as it is directly proportional to the length of the string being passed in.


// 3) Pangram Sentence
// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.
function isPangram(sentence) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowerCaseSentence = sentence.toLowerCase();

    for (let i = 0; i < alphabet.length; i++) {

        if (!lowerCaseSentence.includes(alphabet[i])) {
            return false;
        }
    }

    return true;
};
console.log(isPangram(`The quick brown fox jumps over the lazy dog`));
//This is O(n) because it has a single loop
// Extra Credit: The space complexity is O(n) as it is directly proportional to the length of the string being passed in.


// 4) Longest Word

// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

function findLongestWord(words) {
    let maxLength = 0;

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (word.length > maxLength) {
            maxLength = word.length;
        }
    }

    return maxLength;
};
console.log(findLongestWord(["hi", "hello"]));
//This is O(n) because it has a single loop
// Extra Credit: The space complexity is O(n) as it is directly proportional to the length of the string being passed in.



