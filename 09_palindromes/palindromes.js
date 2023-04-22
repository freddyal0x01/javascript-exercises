const palindromes = function (str) {
    testWord = str.toLowerCase().replace(/[^a-z]/g, "");
    return testWord.split("").reverse().join("") === testWord;
};

// Do not edit below this line
module.exports = palindromes;
