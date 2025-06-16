// if
// const isUserLoggedIn = true
const temperature = 41

// if ( temperature <= 50 ){
//     console.log("Temperature is Less than 50");
    
// } else{
//     console.log("Temperature is greater than 50");
// }



const score = 200

// if ( score > 100 ){
//     const power = "fly"
//     console.log(`User power : ${power}`);
    
// }

// console.log(`User power : ${power}`);


// const balance = 1000

// if( balance > 500 ) console.log("Test");

// if ( balance < 500 ){
//     console.log( "less than 500" );
    
// } 

// else if ( balance < 750 ){
//     console.log("Less than 750");
// } 

// else if ( balance < 900 ){
//     console.log("Less than 900");
    
// } 

// else{
//     console.log("Less than 1200");
    
// }


const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


if ( isUserLoggedIn && debitCard ){
    console.log("Allowed to buy the course");
    
}

if ( loggedInFromEmail || loggedInFromGoogle ){
    console.log("User Logged in");
    
}
