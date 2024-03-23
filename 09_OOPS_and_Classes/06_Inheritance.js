class User {
  constructor(username) {
    this.username = username;
  }

  toVerify() {
    return `${this.username} is your username`;
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username); //use super keyword to refer parent class constructor because username was declared in parent class
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`The course is added by ${this.username}`);
  }
}

const student = new Teacher("Junaid", "junaid@example.com", "junid124");
console.log(student);
student.addCourse();
