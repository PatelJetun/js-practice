const User = {
    _email:"jetun@mail.com",
    _pass: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }

}
console.log(User.email);

const tea = Object.create(User)
console.log(tea.email);


