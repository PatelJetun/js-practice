let score = "jetun"

console.log(typeof score)
console.log(typeof (score)) 

let valueInNumber = Number(score)
console.log(typeof (valueInNumber)) //will return data type as number
console.log(valueInNumber) //will return Nan if its value has other characters than a number

/*---------EXAMPLES-------------*/
// "33"=> 33
// "33abc"=> NaN (Not a number)
// "example"=> NaN
// true=> 1, false => 0   


let isLoggedIn = false

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);


let someNumber = 33

let stringNumber = String(someNumber)
console.log(typeof stringNumber);
console.log(stringNumber);
