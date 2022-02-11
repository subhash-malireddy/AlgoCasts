// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    // return parseInt(Math.abs(n).toString().split("").reverse().join("")) * Math.sign(n)
    let reverse = 0, lastDigit = 0
    const sign = Math.sign(n) 
    n = Math.abs(n)
    while(n > 0){
        lastDigit = n % 10
        reverse = reverse * 10 + lastDigit
        n = Math.floor(n /10)
    }
    return reverse * sign
}

module.exports = reverseInt;
