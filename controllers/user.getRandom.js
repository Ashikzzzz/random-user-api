const datas = require("../data/data.json");

// random user
module.exports.randomUser = (req, res, next) => {
  const randomUser = datas[Math.floor(Math.random() * datas.length)];
  //   console.log(randomUser);
  res.json(randomUser);
  //   next();
};

// get all user
module.exports.getAllUser = (req, res) => {
  res.json(datas);
};
