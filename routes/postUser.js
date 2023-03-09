const express = require("express");
const { postUser } = require("../controllers/user.getRandom");

const router = express.Router();

router.post("/", postUser);

module.exports = router;
