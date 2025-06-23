class User{
    constructor(username){
        this.username = username
    }

    logMe() {
        console.log(`Username is: ${this.username}`);
    }   
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`New course was added by : ${this.username}`);
        
    }

}


const teacherOne = new Teacher("Jetun", "jetun@gmail.com", 123)
teacherOne.addCourse()

const normalUser = new User("Patel")
normalUser.logMe()
teacherOne.logMe()

console.log( teacherOne instanceof User ); 