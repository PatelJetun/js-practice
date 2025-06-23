const descriptor =Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(descriptor);
// console.log(Math.PI);

const myObj = {
    name: "bombay sapphire",
    price: 2800,
    isAvailable: true,

    orderChai: function() {
        console.log("Chai nahi bani");
    }
}

console.log(Object.getOwnPropertyDescriptor(myObj, "price"));

Object.defineProperty(myObj, 'price', {
    writable: false,
    enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(myObj, "price"));

for (let [key, value] of Object.entries(myObj)) {
    if(typeof value !== 'function'){
        console.log(`Key: ${key} and Value: ${value}`);
    }
}