const name = "jetun"
const repoCount = 50

// console.log(name + repoCount + " Value"); //Not modern syntax

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //Backticks are used for template literals which allows string interpolation

const gameName = new String("Call-of-Duty")
// console.log(gameName[0])
// console.log(gameName.__proto__)


// console.log(gameName.length);
// console.log(gameName.toLocaleUpperCase());  
// console.log(gameName.charAt((gameName.length - 1) / 2)); 
// console.log(gameName.indexOf('t'))

const newgameName = gameName.substring(0,4)
console.log(newgameName);


const anotherString = gameName.slice(-12,5 )
console.log(anotherString);

const newStringOne = "                jetun                  "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://jetun.com/jetun%20patel"
console.log(url.replace('%20','-'));

console.log(url.includes('jetun'));

console.log(gameName.split('-'));
