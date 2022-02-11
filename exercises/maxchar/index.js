// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let charSet = new Set([])
    let charCount = {}
    if(str.length === 1){
        return str
    }
    for(const char of str){
        if(charSet.has(char)){
            charCount[char] = charCount[char] ? charCount[char] + 1 : 2
        }else{
            charSet.add(char)
        }
    }
    return Object.keys(charCount)[0] || "👯‍♂️ All characters occured the same number of times in the given string! 👯‍♀️"
}
console.log(maxChar("ab"))
module.exports = maxChar;
