const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
// import routes
const getUserRoute = require("./routes/user.getRoute");
const allUser = require("./routes/getAllUser");
const getOne = require("./routes/getUserOne");
const postData = require("./routes/postUser");

app.use(cors());
app.use(express.json());

// uses of routes

app.use("/api/v1/user/random", getUserRoute);
app.use("/api/v1/user/all", allUser);
app.use("/api/v1/user/all", getOne);
app.use("/api/v1/user/all", postData);

app.get("/", (req, res) => {
  res.send("Random user is running");
});

app.get("*", (req, res) => {
  res.send("No route found");
});

app.listen(port, () => {
  console.log(`Server running ${port}`);
});
