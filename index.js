const input = require('readline-sync');
let str = "LaunchCode";


//a) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newStr = str.replace("Lau","");


//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`Original: ${str} \nModified: ${newStr}Lau`);



//b) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let numberOfLetters = input.question("Enter integers: ");

//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if(numberOfLetters > str.length || numberOfLetters < 0){
  let temp = str.slice(0,3);
  temp = str.slice(3, str.length).concat(temp);
  console.log(`You entered ${numberOfLetters} that is out of bound of an array`);
}else{
  let temp = str.slice(0,numberOfLetters);
  temp = str.slice(numberOfLetters,str.length).concat(temp);
  console.log(`Original: ${str} \nModified: ${temp}Lau`);

}