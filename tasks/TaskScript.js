/*const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter the first integer: ", (input1) => {
  readline.question("Enter the second integer: ", (input2) => {
    const num1 = parseInt(input1, 10);
    const num2 = parseInt(input2, 10);

    // Find and print the maximum number
    if (num1 > num2) {
      console.log("The maximum number is: " + num1);
    } else {
      console.log("The maximum number is: " + num2);
    }

    readline.close();
  });
});*/

/*const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter the first num: ", (input1) => {
  readline.question("Enter the second num: ", (input2) => {
    readline.question("Enter the third num: ", (input3) => {
      const num1 = parseInt(input1, 10);
      const num2 = parseInt(input2, 10);
      const num3 = parseInt(input3, 10);

      const max = Math.max(num1, num2, num3);
      const min = Math.min(num1, num2, num3);
      console.log("max num is: " + max);
      console.log("min num is: " + min);
      readline.close();
    });
  });
});*/

/*const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter your equation: ", (input) => {
  console.log(eval(input));
  readline.close();
});*/

/*
let isItTheSame = [1, 2, 3];
let isItTheSame2 = [1, 2, 3];
function isItTheSameCheck() {
  const sameLength = isItTheSame.length === isItTheSame2.length;
  const sameValues = isItTheSame.every((val, index) => val === isItTheSame2[index]);
  if (sameLength && sameValues) {
    console.log("same");
  } else {
    console.log("not the same");
  }
}

isItTheSameCheck();
*/
/*
function isItPrime(num) {
  if (num % 2 === 0 && num !== 2) {
    console.log("not Prime");
  } else if (num < 2) {
    console.log("not Prime");
  } else {
    console.log("it is prime");
  }
}

isItPrime(1);
*/
