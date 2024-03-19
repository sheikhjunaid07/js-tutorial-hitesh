const PromiseOther = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "Junaid", city: "Indore" });
  }, 1000);
});

async function consumePromise() {
  const response = await PromiseOther;
  console.log(response);
}
consumePromise();

//with error
const PromiseWithError = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ name: "Anas", city: "Nepanagar" });
    } else {
      reject("Error: something went wrong!!");
    }
  }, 1000);
});

//with then and catch
async function consumePromiseWithError() {
  await PromiseWithError.then(() => {
    // const response = await PromiseWithError;
    console.log(response);
  }).catch((error) => {
    console.log(error);
  });
}
consumePromiseWithError();

//same with try and catch
/*
  async function consumePromiseWithError() {
    try{
      const response = await PromiseWithError
      console.log(response);
    }.catch((error) => {
      console.log(error);
    }
    });
  }
  */

//basic fatch with try catch
async function getUsersData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const getData = await response.json();
    console.log(getData);
  } catch (error) {
    console.log("Error: ", error);
  }
}
getUsersData();

//fetch with then, catch
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
