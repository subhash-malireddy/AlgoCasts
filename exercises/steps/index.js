// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    let i = 1
    if (Math.sign(n) === -1) console.log('Provide a postive integer for n.')
    if (n === 0) console.log('')
    if (n === 1) {
        console.log(`#`)
        return
    }
    while (i <= n) {
        let steps = ""

        // # loop
        let hindex = 1
        while (hindex <= i) {
            steps += "#"
            hindex++
        }

        //" " loop
        let maxNumSpaces = n - i, spaceIndex = 1
        while (spaceIndex <= maxNumSpaces) {
            steps += " "
            spaceIndex++
        }

        console.log(steps)

        i++
    }
}

steps(1)

module.exports = steps;