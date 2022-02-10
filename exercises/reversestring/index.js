// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let strArr = str.split("");
    
    let len = strArr.length;
    let halfLen = len/2;
    
    for(let i=0; i<halfLen; i++){
        let temp = strArr[i];
        strArr[i] = strArr[len - i];
        strArr[len - i] = temp;
    }
    return strArr.join("")
}

module.exports = reverse;
