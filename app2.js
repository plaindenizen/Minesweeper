//Create a function that converts hours into seconds
//multiply hours by 60, then multiply minurtes by 60

// let hours = 5

// function convertH2S() {
//     let mins = hours*60;
//     let secs = mins*60;
//     return secs;
// }   

// console.log(convertH2S())   //this works???

//create a function that calculates the area of a rectangle
//area = length x width
//if arguments are invalid, return -1

// let rectangleL = 5
// let rectangleW = 10

// function rectCal() {
//     let area = rectangleL*rectangleW;
//     if (area<0) {
//         return "-1"
//     }
//     return area;
    
// }

// console.log(rectCal())

//rileys version

// function area(height,width){
//     let result = height*width
//     if(!Number.isInteger(result)) {
//         result = -1
//     }
//     return result
// }   console.log(area(3,'s'))

// //attempting ES6

// const area = (h,w) => {
//     let result = w*h
//     return Number.isInteger(result) ? result : -1
// }

// console.log(area(3,'s'))


// //justins 1 line
// const areaThree = (h2,w2) => Number.isInteger(h2,w2) ? h2*w2 : -1
// console.log(areaThree(3,2))

// //SECTION - create a function that takes a number as an argument, increment the number by 1.

// const incrementNumber = num => num += 1

//create a function to concatenate two int arrays

// let arr1 = [1,2,3,4,5]
// let arr2 = [6,7,8,9]

// console.log(arr1.concat(arr2))

//ES6

// const concatthree = (arr1,arr2) => [...arr1, ...arr2]
// console.log(concatthree([0,0,0],[1,1,1]))


//create a function that takes and object argument to find the volume of a box, (w,l,h)
//return the volume of the box

function volume(w,l,h) {
    vol=w*l*h
    return vol
}

console.log(volume(2,3,4))




