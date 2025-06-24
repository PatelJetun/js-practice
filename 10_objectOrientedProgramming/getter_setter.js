class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get password(){
        return `${this._password}jetun.`.toUpperCase()
    }

    set password(value){
        this._password = value
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }
}

const jetun = new User("jetun@gmail.com", "abc")
console.log(jetun.password);    
console.log(jetun.email);    
