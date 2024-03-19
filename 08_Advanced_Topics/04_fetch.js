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
