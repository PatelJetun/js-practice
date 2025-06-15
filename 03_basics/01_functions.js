function sayMyName  (){
    console.log("J");
    console.log("E");
    console.log("T");
    console.log("U");
    console.log("N");
    
}
// sayMyName // refrence
// sayMyName() // exectuion using ()


// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumber(number1, number2){

    return number1 + number2

    // let result = number1 + number2
    // return result   
}


const result = addTwoNumber(3, 5)

// console.log(`Value of result : ${result}`);

function loginUserMessage(userName = "sam"){
    if(userName === undefined ){ // !username can be written in if condition instead of userName === undefined
        console.log("Please enter a username")
        return
    }
    return `${userName} just logged in`
}
// console.log(loginUserMessage("Jetun"))
console.log(loginUserMessage("jetun"))