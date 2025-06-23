// let myName = "Jetun     "
// let myChannel = "Patel      "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "webs winging",

    getSpiderPower: function() {
        console.log(`Spidey Power is: ${this.spiderman}`);
    }
}

Object.prototype.jetun = function(){
    console.log("Jetun is present in all object");
}

Array.prototype.heyJetun = function(){
    console.log("Jetun Says hello is present in all arrays")
}

// heroPower.jetun()
myHeros.jetun()
// heroPower.heyJetun()
myHeros.heyJetun()
