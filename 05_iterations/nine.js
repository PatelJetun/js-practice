const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( (acc, curVal) => {
//     console.log(`Accumulator: ${acc} and Current Value: ${curVal}`);
    
//     return acc + curVal 
// }, 5)

// console.log(myTotal);


const shoppnigCart = [
    {
        itemName: "js",
        price: 2999
    },

    {
        itemName: "python",
        price: 999
    },

    {
        itemName: "mobile dev",
        price: 5999
    }
]

const cartPrice = shoppnigCart.reduce( (acc, item) => (acc + item.price), 0)

console.log(cartPrice);
