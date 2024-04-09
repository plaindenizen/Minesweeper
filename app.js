//minesweeper
/*
create a function that takes a grid $ and - where each $ represents a mine and each - represents a mine free spot.
return a n array where each $ is replaced by a digit indicating the number of mines immediately adjacent to the spot.
*/

/*
minegrid([
    ['-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-'],
    ['-', '-', '$', '-', '-'],
    ['-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-']
])

output => [
    [
    ['0', '0', '0', '0', '0'],
    ['0', '1', '1', '1', '0'],
    ['0', '1', '$', '1', '0'],
    ['0', '1', '1', '1', '0'],
    ['0', '0', '0', '0', '0']
]
*/

//!SECTION Grid

let x1 = [' ', ' ', ' ', ' ', ' ']
let x2 = [' ', ' ', ' ', ' ', ' ']
let x3 = [' ', ' ', ' ', ' ', ' ']
let x4 = [' ', ' ', ' ', ' ', ' ']
let x5 = [' ', ' ', ' ', ' ', ' ']


y = [x1, x2, x3, x4, x5]

x3[2] = '$'


console.log(y)

// const mineGrid = (arr) => {
//     //create a helper function that accesses the element position (y,x) in arr. If the y index is valid or exists
//     //I want to return arr[y][x]; otherwise return null (this will prevent accessing undefined elements and to avoid errors)
//     const checkAccess = (y,x) => arr[y] ? arr[y][x] : null
//     // create a helper function that calculates the number of adjacent mines around the cell at position (y,x)
//     const getMine = (y,x) => {
//         //NOTE - an array is constructed with elements representing the content of adjecent cells,
//         //we are going to use checkAccess for each of the eight possible position adjacent position.
//         return [
//             checkAccess(y+1, x),    //checks the cell directly below the current
//             checkAccess(y+1,x+1),   //checks the cell diagonally below and to the right of the current cell
//             checkAccess(y+1, x-1),  //checks the cell diagonally below and to the left of the current cell
//             checkAccess(y, x+1),    //checks the cell directly to the right of current cell.
//             checkAccess(y, x-1),    //checks the cell directly to the left of current cell.
//             checkAccess(y-1, x),    //checks the cell directly above current cell.
//             checkAccess(y-1,x+1),   //checks the cell diagonally above and to the right of the current cell.
//             checkAccess(y-1,x-1),   //checks the cell digonally above and to the left of the current cell.
//             //NOTE - construct an array of values that represent the contents of the cells adjacents, after the constructing of the arraywe will use filter method to keep only thsoe elements that are mines ('$').
//         ].filter(adjCell => adjCell === "$").length.toString()
//     }
//     return arr.map((r,y) => r.map((c,x) => c === "-" ? getMine(getMine(x,y) : c)))

// }
