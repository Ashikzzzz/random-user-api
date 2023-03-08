const express = require("express");

const router = express.Router();

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

router.get("/", (req, res) => {
  const query = {};
  res.json(query);
});

module.exports = router;
