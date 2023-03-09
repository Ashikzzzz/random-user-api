const users = [
  {
    id: 1,
    name: "Alice",
    gendar: "male",
    contact: "016086669699",
    adress: "India",
    photoURL:
      "https://ashikur-rahman2323.imgbb.com/?list=images&sort=date_desc&page=3&params_hidden%5Buserid%5D=XSnStm&params_hidden%5Bfrom%5D=user&seek=FD76tL7",
  },
  {
    id: 1,
    name: "Bob",
    gendar: "male",
    contact: "09654825384582",
    adress: "Singapore",
    photoURL:
      "https://ashikur-rahman2323.imgbb.com/?list=images&sort=date_desc&page=3&params_hidden%5Buserid%5D=XSnStm&params_hidden%5Bfrom%5D=user&seek=FD76tL7",
  },
  {
    id: 1,
    name: "Jhon",
    gendar: "male",
    contact: "0920809479",
    adress: "Sweden",
    photoURL:
      "https://ashikur-rahman2323.imgbb.com/?list=images&sort=date_desc&page=3&params_hidden%5Buserid%5D=XSnStm&params_hidden%5Bfrom%5D=user&seek=FD76tL7",
  },
  {
    id: 1,
    name: "Hasina",
    gendar: "female",
    contact: "0807574957457",
    adress: "Hugary",
    photoURL:
      "https://ashikur-rahman2323.imgbb.com/?list=images&sort=date_desc&page=3&params_hidden%5Buserid%5D=XSnStm&params_hidden%5Bfrom%5D=user&seek=FD76tL7",
  },
];

module.exports.randomUser = (req, res) => {
  const randomUser = users[Math.floor(Math.random() * users.length)];

  res.json(randomUser);
};
