class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `qweryuipalms${this.password}abc`;
  }

  changeUserName() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new User("Jetun", "jetun@google.com", 1234);
console.log(chai.encryptPassword());
console.log(chai.changeUserName());

//behind the scene

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `qweryuipalms${this.password}abc`;
};

User.prototype.changeUserName = function () {
  return `${this.username.toUpperCase()}`;
};

const tea = new User("tea", "tead@google.com", 1245);
console.log(tea.encryptPassword());
console.log(tea.changeUserName());
