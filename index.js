const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
// import routes
const getUserRoute = require("./routes/user.getRoute");
const getAllUser = require("./routes/user.getAll");

app.use(cors());
app.use(express.json());

// uses of routes

app.use("/api/v1/user/random", getUserRoute);
app.use(" /user/all ", getAllUser);

// app.get("/user/random", (req, res) => {
//   const randomUser = users[Math.floor(Math.random() * users.length)];

//   res.json(randomUser);
// });

app.get("/", (req, res) => {
  res.send("Random user is running");
});

app.get("*", (req, res) => {
  res.send("No route found");
});

app.listen(port, () => {
  console.log(`Server running ${port}`);
});
