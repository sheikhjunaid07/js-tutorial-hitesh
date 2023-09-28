//other way to create object (singleton object)

const userData = new Object()

userData.name = "Parvez"
userData.age = 26
userData.email = 'parvez@gmail.com'
isLoggedIn = true

console.log(userData);

//declare object inside an objects
const newUser = {
    name: {
        fullName: {
            firstName: "Raj",
            lastName: "Sharma"
        }
    },
    age: 20,
    email: "abc@gmail.com"
}

//access Data
console.log(newUsername); 
console.log(newUser.name.fullName.firstName);
console.log(newUser.name.fullName.lastName);