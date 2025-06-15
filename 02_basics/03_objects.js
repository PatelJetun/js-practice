// singleton


//object literals

const mySym = Symbol("Key1")

const jsUser = {
    name: "jetun",
    "full name": "jetun patel",
    [mySym]: "mySym1",
    age: 20,
    location: "Ahmedabad",
    email: "jetun@gmail.com",
    isLoggedIn: false,  
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
 
jsUser.email = "jetunpatel@google.com"
// Object.freeze(jsUser)
jsUser.email = "jetun@chatgpt.com"
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello jsUser")
}   

console.log(jsUser.greeting())