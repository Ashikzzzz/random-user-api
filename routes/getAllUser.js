const express = require("express");
const getAllRoute = require("../controllers/user.getRandom");
const router = express.Router();

// get all user
/**
 * @api {get} /get all user data
 * @apiDescription view all user after hit this api
 * @apiPermission everyone
 *
 * @apiHeader {String} Nothing
 *

 */
router.get("/", getAllRoute.getAllUser);

module.exports = router;
