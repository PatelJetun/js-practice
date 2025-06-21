const promiseOne = new Promise(function (reslove, reject) {
    //Do an async task
    //DB calls, cryptography, netowrk call
    setTimeout(function () {
        console.log('Async Task is complete');
        reslove()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})


new Promise(function (resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async Two Resolved");
})

const promiseThree = new Promise(function (resolve,reject){
    setTimeout(function() {
        resolve({username: "Jetun", email:"example@gmail.com"})
    },1000)
})

promiseThree.then(function(user) {
    console.log(user)
})  

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true
        if(!error){
            resolve({username: "Patel Jetun", password: "0000"})
        } else{
            reject('ERROR: Something Went Wrong')
        }
    },1000)
})

const username = promiseFour
.then(function(user) {
    console.log(user);
    return user.username;
})
.then((username) => {
    console.log(username);
})
.catch((err) => {
    console.log(err);
})
.finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function () {
      let error = true
      if (!error) {
        resolve({ username: "javascript", password: "0000" });
      } else {
        reject("ERROR: JS WENT WRONG");
      }
    }, 1000);
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);  
    } catch (error){
        console.log(error)
    }
}
consumePromiseFive()


async function getUserData(){
   try{
        const response = await fetch('https://api.github.com/users/pateljetun')
        const data = await response.json()
        console.log(data);
   } catch (error){
        console.log(error);
   }
}   

getUserData()