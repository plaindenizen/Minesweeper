

/*
readline is a JS object (r1)
*/

//step 1 : include the radline module
const readline = require('readline')

//step 2 : create an instance of readline.interface
const r1 = readline.Interface({
    input: process.stdin,
    output: process.stdout
})

//step 3 : promt the user for their name
rl.question('What is your name?', (name) => {
    //step 4 : display a greeting
    console.log(`Hello, ${name}!`)
})
//step 5 : close the readline interface.
rl.close()