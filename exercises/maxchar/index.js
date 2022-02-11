// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/*
    my original solution:
    
    function maxChar(str) {
    if(str.length === 1){
        return str
    }
    let charSet = new Set([])
    let charCount = {}
    for(const char of str){
        if(charSet.has(char)){
            charCount[char] = charCount[char] + 1 || 2
        }else{
            charSet.add(char)
        }
    }
    return Object.keys(charCount)[0] || "👯‍♂️ All characters occured the same number of times in the given string! 👯‍♀️"
}
*/

// adapted to tutorial and much robust. It creates a charMap
function maxChar(str) {
    if (str.length === 1) {
        return str
    }
    let charCount = {}
    for (const char of str) {
        if (charCount.hasOwnProperty(char)) {
            charCount[char] = charCount[char] + 1
        } else {
            charCount[char] = 1
        }
        /*
            Above if else block OR simply
            charCount[char] = charCount[char] + 1 || 1
        */
    }

    let maxChar = "", maxCharCount = 0

    for (const [char, count] of Object.entries(charCount)) {
        if (count > maxCharCount) {
            maxCharCount = count
            maxChar = char
        }
    }

    return maxChar
}
console.log(maxChar("abcccccccd"))
module.exports = maxChar;
