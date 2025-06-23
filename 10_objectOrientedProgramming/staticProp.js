class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }
            
    static createId(){
        return `ABC`
    }
}

const jetun = new User("jetun")
console.log(jetun.createId())
