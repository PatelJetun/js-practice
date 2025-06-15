// IMMEDIATELY INVOKED FUNCTION EXECUTION (IFFE)

(function chai() {
    //named iffe
    console.log("DB CONNECTED");
})();

((name) => {
    //simple iffe
    console.log(`DB CONNECTED TWO ${name}`);
    
})("jetun");

