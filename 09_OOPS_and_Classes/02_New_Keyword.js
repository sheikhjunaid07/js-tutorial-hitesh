function user(username, age, isLoggedIn) {
  this.username = username;
  this.age = age;
  this.isLoggedIn = isLoggedIn;

  return this;
}

//if we don't use new keyword they just overwrite function and always print the last one
const one = new user("Junaid", 24, false);
console.log(one);

const two = new user("Parvez", 27, true);
console.log(two);
