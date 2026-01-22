// let name = "Akshit";
// let course = "BCA_NEW";
// let college = "IGNOU";

// console.log(`My name is ${name}, I am studying ${course} from ${college}`);

// Basic Else if


// let score = 20;

// if (score >= 29) {
//     console.log("Eligible");
// } else{
//     console.log("Not Eligible");
// }



// else-if

// let score = 50;

// if (score >= 90) {
//     console.log("Grade A");

// } else if (score >= 73) {
//     console.log("Grade B");
// } else if (score >= 60) {
//     console.log("Grade C");
// } else {
//     console.log("Fail");
// }
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("Enter temperature: ", function (temperature) {
//   temperature = Number(temperature);
// if (isNaN(temperature)){
//     console.log("Invalid input");
// } else if (temperature >= 30) {
//     console.log("Hot");
//   } else if (temperature >= 20) {
//     console.log("Normal");

//   } else {
//     console.log("Cold");
//   }
//   rl.close();
// });

// For loop
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     } else{
//         console.log("odd");
//     }
// }

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", function (n){
    n = Number(n);
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i
    }
    console.log("Sum is:" , sum)

    rl.close();

})