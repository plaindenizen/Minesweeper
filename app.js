

// /*
// readline is a JS object (r1)
// */

// //step 1 : include the radline module
// const readline = require('readline')

// //step 2 : create an instance of readline.interface
// const r1 = readline.Interface({
//     input: process.stdin,
//     output: process.stdout
// })

// //step 3 : promt the user for their name
// rl.question('What is your name?', (name) => {
//     //step 4 : display a greeting
//     console.log(`Hello, ${name}!`)
// })
// //step 5 : close the readline interface.
// rl.close()


//include the readline mudule module for command line input
const readline = require ('readline')       //NOTE - 'require' is a global method that allows us to import external modules into nodeJS.

//create an interface for the input and output 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//function to generate a random number between min and max (inclusive)
function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max-min +1)) + min
}

//the secret number to guess bewtween 1 and 100
const secretNumber = getRandomInt(1,10)

//Counter for number of attempts
let attempts = 0

console.log('guess the number! It/s between 1 and 10. You have unlimited attempts.')

//create a function to start the game
function guessNumber() {
    rl.question('Enter your guess:', (answer)=> {
        attempts += 1 //increment the number of attempts
        const guess = parseInt(answer,10) //converting the input string to number

        //check if the guess is correct, too or too low
        if(guess === secretNumber) {
            console.log(`Correct! the number was ${secretNumber}. It took you ${attempts}attempts.`)
            rl.close()
        } else if (guess < secretNumber) {
            console.log('Too low!')
            guessNumber()
        } else if (guess > secretNumber) {
            console.log("Too High!")
            guessNumber()
        } else {
            console.log('Please enter a valid number')
            guessNumber()
        }
    })
}

guessNumber()