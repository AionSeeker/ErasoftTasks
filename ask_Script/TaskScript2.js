//given this numbers array [10,20,30,40,50,60,70,80,90,100]
//Write a script to only display numbers greater than 50 in the console
/*
let arr = [10,20,30,40,50,60,70,80,90,100]

arr.forEach(num =>{
  if(num > 50){
    console.log(num)
  }
})
*/


//Write a program that take 3 integers from user then print the max element and the min element
/*
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
});
*/
//Write a JavaScript function to get the last elements of an array.  Passing a parameter 'n' will return the last 'n' elements of the array
/*
function GetElements(arr,n) {

  if(n === undefined){
    return arr.slice(-1);
  }
  if(n === 0){
    return [];

  }
  return arr.slice(-n)
  
}
let SimpleArr = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
console.log(GetElements(SimpleArr,4));
*/

//Write a JavaScript code that converts the first letter of each word of the string to upper case.

/*
function UpperCase(str){
  return str
  .split(' ')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');
}
let text = "hello world"
let converter = UpperCase(text);
console.log(converter)
*/

//return only the non-repeated characters from a string

/*
const removeDuplicates = (str) => [...new Set(str)].join('');
console.log(removeDuplicates("banana")); 
*/

//return the longest word in a sentence
/*
let sentence = "my name is ammar"
let worlds = sentence.split(' ')
let biggestOne = worlds.reduce((previous, current) => {
  if (previous.length > current.length){
    return previous
  }else{
    return current
  } 
},)

console.log(biggestOne);
*/

//with a nested loop write the multiplication table for numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
    
    for (let j = 1; j <= 10; j++) {
        let result = i * j;
        console.log(`${i} x ${j} = ${result}`);
    }
    
    console.log(""); 
}
