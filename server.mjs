import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
const app = express()
const port = process.env.PORT || 3000
let users = [];
app.use(cors())


const responseDiv = document.getElementById("response-div");

function getUsers() {
  const URL = "";

  axios.get(URL).then((response) => {
    const users = response.data;
    console.log(users);

    if (response.data.length === 0) {
      //   alert("No Users");
      responseDiv.innerHTML = "No Users";
    } else {
      const usersList = users.map((user) => {
        return `<tr><td>${user.name}</td><td>${user.email}</td><td>${user.address}</td></tr>`;
      });

      const resultDiv = document.getElementById("result-div");

      resultDiv.innerHTML = usersList.join("");
    }
  });
}

function addUser() {
  const name = document.getElementById("firstName").value + document.getElementById("LastName").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  const addUserURL = "https://signup-form-nodejs.herokuapp.com/users";

  if (name === "" || email === "" || address === "") {
    alert("fill all the fields");
  } else {
    const userData = {
      name: name,
      email: email,
      address: address,
    };

    axios.post(addUserURL, userData).then((response) => {
      
      responseDiv.innerHTML = "User Added";
      location.reload();
    });
  }
}





