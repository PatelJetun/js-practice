
let a = 300

if(true){
    let a = 10
    const b = 20
    // console.log("Inner: ", a);
    
}


// console.log(a);
// console.log(b);

function one(){
    const userName = "Jetun"

    function two(){
        const website = "youtube"
        console.log(userName)
    }

    // console.log(website)

    two()
}

one()
