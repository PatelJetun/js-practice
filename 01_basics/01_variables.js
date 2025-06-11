const accountName= 144553
let accountEmail="jetunpatel@gmail.com"
var accountPassword="12345"
accountCity="Ahmedabad"
let accountState;


// accountName=2 This is not allowed in case of const, as const value once assigned cannot be changed.----- This line of code will generate an error

{
    let accountEmail="hello@gmail.com"
    console.table([accountName, accountEmail]);   
}

accountEmail="hc@hc.com"
accountPassword="00000"
accountCity="Gandhinagar"

/* 
Please Please Please! never use var in javascript. It is an old varaibale and it does not support block scope and functional scope
*/

console.log(accountName);

console.table([accountName, accountEmail, accountPassword, accountCity, accountState]);

