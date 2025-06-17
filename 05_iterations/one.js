// for
for (let i = 0; i <= 10; i++) {
    const element = i; 
    if ( i%2 == 0 && i !=0){
        console.log(i)
    }
}


for (let i = 1; i <= 10; i++){
        // console.log(`Outer Loop: ${i}`);
    for (let j = 1; j <= 10; j++){
        // console.log(`Inner Loop: ${j} and Outer Loop: ${i}`);
        //  console.log(`${i} X ${j} = ${ i * j }`);
    }
}

let myArray = ["flash", "batman", "superman"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
}


for (let i = 1; i <= 20; i++) {
    if( i === 5 ){
        console.log("5 detected");
        break;
    }
    console.log(`Value of i is: ${i}`);
}


for (let i = 1; i <= 20; i++) {
    if( i % 2 === 0 ){
        console.log(`${i} detected`);
        continue;
    }
    console.log(`Value of i is: ${i}`);
}