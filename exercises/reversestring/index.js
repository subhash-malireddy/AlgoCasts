// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    var strArr = str.split("")
    
    var len = strArr.length;
    
    for(var i=0; i<len/2; i++){
        let temp = strArr[i];
        strArr[i] = strArr[len - i];
        strArr[len - i] = temp;
    }
    return strArr.join("")
}

module.exports = reverse;
