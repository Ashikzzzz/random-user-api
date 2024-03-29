const express = require("express");
const userRoute = require("../controllers/user.getRandom");

const router = express.Router();

/**
 * @api {get} /get random api
 * @apiDescription view user random data after every
 * @apiPermission everyone
 *
 
 */
// random user
router.get("/", userRoute.randomUser);

module.exports = router;
