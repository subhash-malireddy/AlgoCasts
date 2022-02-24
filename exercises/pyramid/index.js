// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(5)
//       '    #    '
//       '   ###   '
//       '  #####  '
//       ' ####### '
//       '#########'
function pyramid(n) {
    const stairLength = 1 + 2 * (n - 1)
    // const centerIndex = n // Math.ceil(stairLength / 2) gives n  
    // console.log("stairLength : ", stairLength, '\n', "centerIndex : ", n)
    let numHashes = 1
    for (let i = 0; i < n; i++) {
        let stair = ""
        while (stair.length < numHashes) {
            stair += "#"
        }
        stair = stair.padStart(stair.length + (stairLength - numHashes) / 2)
        stair = stair.padEnd(stairLength)
        console.log(stair)
        numHashes += 2
    }
}

// pyramid(3)
module.exports = pyramid;
