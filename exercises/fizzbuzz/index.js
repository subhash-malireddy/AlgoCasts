// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    let init = 1
    while(init <= n){
        let log = ""
        if(init%3 === 0) log += `fizz`
        if(init%5 === 0) log += `buzz`
        console.log(log || init)
        init++
    }
}

module.exports = fizzBuzz;
