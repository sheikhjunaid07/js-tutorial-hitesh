const promiseOne = new Promise((resolve, reject) => {
  //inside this promise you can do async tasks, DB calls etc.
  setTimeout(() => {
    console.log("Async task is complete..");
    resolve();
  }, 1000);
});

//then() is direct connected to resolve
promiseOne.then(() => {
  console.log("Promise consumed..");
});

//new way to create a promise
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("New promise is complete..");
    resolve();
  }, 1000);
}).then(() => {
  console.log("New promise consumed..");
});

//another example
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "Junaid", email: "junaid@example.com" }); //we can pass anything in resolve like object, array, value etc.
  }, 1000);
}).then((user) => {
  //we know then is directly connected to the resolve so we can directly access value inside then()
  console.log(user);
});

//then, catch, finally
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "Sheikh", city: "Indore" });
  }, 1000);
})
  .then((user) => {
    console.log(user.username);
    console.log(user.city);
  })
  .catch((error) => {
    console.log("catch catch the error", error);
  })
  .finally(() => {
    console.log("finally is Always execute.");
  });
