// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

/*
What's happenning in this function?
The idea is to fill the spiral layer by layer.
This program starts at the outer layer and 
continues until the end, where it creates a spiral.

to know we reached the end we have a while loop. which checks for the base condition of our problem.
inside the while loop we hav efour for loops which fills the top, right, bottom, left sides 
of the current spiral layer respectively.

after each for loop respective layer's side counter increments or gets decremented. 
for top and left it gets incremented and for right and bottom it gets decremented.

all the values that are populated are from the counter variable.
*/

function matrix(n) {
    // let spiral = (new Array(n)).fill(new Array(n).fill(0))
    // spiral[0][n + 1] = 'satti'
    // // let spiral = (new Array(n)).fill(new Array(n))
    let spiral = []
    for (let i = 0; i < n; i++) {
        spiral.push([]);
    }
    let startRow = 0, startCol = 0
    let endRow = n - 1, endCol = n - 1
    let counter = 1
    while (startCol <= endCol && startRow <= endRow) {
        //top
        for (let i = startCol; i <= endCol; i++) {
            spiral[startRow][i] = counter
            counter++
        }
        startRow++

        //right
        for (let j = startRow; j <= endRow; j++) {
            spiral[j][endCol] = counter
            counter++
        }
        endCol--

        //bottom
        for (let i = endCol; i >= startCol; i--) {
            spiral[endRow][i] = counter
            counter++
        }
        endRow--

        //left
        for (let j = endRow; j >= startRow; j--) {
            spiral[j][startCol] = counter;
            counter++
        }
        startCol++
    }
    console.log(spiral)
}

matrix(4)

module.exports = matrix;
