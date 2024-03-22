class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptpassword() {
    return `${this.password}abc`;
  }

  //perform some basic operation
  chengeUserNameToUpperCase() {
    return `${this.username.toUpperCase()}`;
  }
}

const user1 = new User("junaid", "junaid@example.com", "junaid123");
console.log(user1);
console.log(user1.username);
console.log(user1.encryptpassword()); //junaid123abc
console.log(user1.chengeUserNameToUpperCase()); //JUNAID

//same operation how can you perform without class
function User2(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User2.prototype.encryptpassword = function () {
  return `${this.password}asdfgh`;
};

User2.prototype.changeUserName = function () {
  return `${this.username.toUpperCase()}`;
};

const newUser = new User2("Sheikh", "sheikh@example.com", "sheikh123");

console.log(newUser);
console.log(newUser.encryptpassword());  //sheikh123asdfgh
console.log(newUser.changeUserName());   //SHEIKH
  
