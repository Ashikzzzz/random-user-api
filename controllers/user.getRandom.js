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
  const { limit } = req.query;
  //   console.log(limit);
  res.json(datas.slice(0, limit));
};

module.exports.getOneUSer = (req, res) => {
  const { id } = req.params;
  const filter = datas.find((data) => data.id == id);
  res.send(filter);
};
