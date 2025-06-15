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
// console.log(loginUserMessage("jetun"))

function calculateCartPrice(...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 300, 10000, 504));


const user = {
    username: "jetun",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is: ${anyObject.username} and price is: ${anyObject.price}`);
    
}

// handleObject(user)

handleObject({username: "Sam", price:399})

const myArr = [200, 400 ,500, 1000]

function returnSecondValue(anyArr){
    return anyArr[1]
}

// console.log(returnSecondValue(myArr));
console.log(returnSecondValue([1000, 6000, 10000, 1000000]));
