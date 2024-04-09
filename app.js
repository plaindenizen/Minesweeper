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

// x1 = ['-', '-', '-', '-', '-']
// x2 = ['-', '-', '-', '-', '-']
// x3 = ['-', '-', '-', '-', '-']
// x4 = ['-', '-', '-', '-', '-']
// x5 = ['-', '-', '-', '-', '-']


// y = [x1, x2, x3, x4, x5]

// console.log(y)

const mineGrid = (arr) => {
    //create a helper function that accesses the element position (y,x) in arr. If the y index is valid or exists
    //I want to return arr[y][x]; otherwise return null (this will prevent accessing undefined elements and to avoid errors)
    const checkAccess = (y,x) => arr[y] ? arr[y][x] : null
    // create a helper function that calculates the number of adjacent mines around the cell at position (y,x)
    const getMine = (y,x) => {
        //NOTE - an array is constructed with elements representing the content of adjecent cells,
        //we are going to use checkAccess for each of the eight possible position adjacent position.
        return [

        ]
    }

}
