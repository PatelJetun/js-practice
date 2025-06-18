const user = {
    username: "jetun",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "jetun"
//     console.log(this.username);
    
// }

// chai()

const chai = () => {
    let username = "jetun"
    console.log(this.username)
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) =>( {username: "jetun"} )


// console.log(addTwo(3, 4));

const myArr = [2, 4, 6, 7, 9, 10]
