const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const users = [
  {
    id: 1,
    name: "Alice",
    gendar: "male",
    contact: "01688556435",
    adress: "Bangladesh",
    photoURL:
      "https://ashikur-rahman2323.imgbb.com/?list=images&sort=date_desc&page=3&params_hidden%5Buserid%5D=XSnStm&params_hidden%5Bfrom%5D=user&seek=FD76tL7",
  },
  {
    id: 1,
    name: "Bob",
    gendar: "male",
    contact: "01688556435",
    adress: "Bangladesh",
    photoURL:
      "https://ashikur-rahman2323.imgbb.com/?list=images&sort=date_desc&page=3&params_hidden%5Buserid%5D=XSnStm&params_hidden%5Bfrom%5D=user&seek=FD76tL7",
  },
  {
    id: 1,
    name: "Jhon",
    gendar: "male",
    contact: "01688556435",
    adress: "Bangladesh",
    photoURL:
      "https://ashikur-rahman2323.imgbb.com/?list=images&sort=date_desc&page=3&params_hidden%5Buserid%5D=XSnStm&params_hidden%5Bfrom%5D=user&seek=FD76tL7",
  },
  {
    id: 1,
    name: "Hasina",
    gendar: "male",
    contact: "01688556435",
    adress: "Bangladesh",
    photoURL:
      "https://ashikur-rahman2323.imgbb.com/?list=images&sort=date_desc&page=3&params_hidden%5Buserid%5D=XSnStm&params_hidden%5Bfrom%5D=user&seek=FD76tL7",
  },
];

app.get("/user/random", (req, res) => {
  const randomUser = users[Math.floor(Math.random() * users.length)];

  res.json(randomUser);
});

app.get("/", (req, res) => {
  res.send("Random user is running");
});

app.listen(port, () => {
  console.log(`Server running ${port}`);
});
