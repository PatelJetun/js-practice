//foreach in js

const coding = ["js", "ruby", "python", "cpp"]

// coding.forEach( function (value) {
//     console.log("Value in array:",value);
    
// })

// coding.forEach( (value) => {
//     console.log("Value in array:",value);
    
// })


// function printME(item) {
//     console.log(item);
    
// }

// coding.forEach(printME)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
    
// } )

const myCoding = [
    {
        langugaeName: "javascript",
        languageFileName: "js"
    },

    {
        langugaeName: "java",
        languageFileName: "java"
    },

    {
        langugaeName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
        console.log(item.langugaeName);
        console.log(item.languageFileName);
        
} )