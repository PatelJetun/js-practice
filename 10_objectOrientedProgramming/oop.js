const user = {
    username: "Jetun",
    loginCount: 10,
    signedIn: true,

    getUserDetails: function() {
        // console.log("Got user details from database");
        // console.log(`Usernme: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greetings = function() {
        console.log(`Welcome : ${this.username}`);
    }

    // return this;
}

const userOne = new User("test", 3, true)
const userTwo = new User("Sumeet", 11, false)
console.log(userOne.constructor);
// console.log(userTwo);
