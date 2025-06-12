// Stack(Primitive) & Heap(Non-Primitive Type) Memory
let myName = "Patel Jetun"

let anotherName = myName
anotherName = "Jetun"
// console.log(anotherName);
// console.log(myName);

let userOne = {
    email:  "user@gmail.com",
    upi:    "user@ypl"
}

let userTwo = userOne

userTwo.email = "jetun@google.com"

console.log(userOne.email);
console.log(userTwo.email);
