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

// get one user

module.exports.getOneUSer = (req, res) => {
  const { id } = req.params;
  const filter = datas.find((data) => data.id == id);
  res.send(filter);
};

// post a user
module.exports.postUser = (req, res) => {
  const newData = req.body;

  datas.push(newData);

  res.json(datas);
};

// update user
module.exports.updateUser = (req, res) => {
  const { id } = req.params;
  const filter = { id: id };
  const updateData = datas.find((data) => data.id == id);

  updateData.id = id;
  updateData.name = req.body.name;
  updateData.gendar = req.body.gendar;
  updateData.contact = req.body.contact;
  updateData.adress = req.body.adress;

  res.send(updateData);
};

// delete user
module.exports.deleteUser = (req, res) => {
  const { id } = req.params;
  const filter = { id: id };
  const leftData = datas.filter((data) => data.id != id);

  res.send(leftData);
};
