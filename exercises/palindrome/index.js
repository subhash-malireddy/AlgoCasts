// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    const strLen = str.length-1
    const halfLen = Math.ceil(strLen/2)
    return str.split("").every((char, i) => {
        console.log(i, " ? ", halfLen)
        if(i >= halfLen) return true  
        return char === str[strLen -i]
    })
}


module.exports = palindrome;
