const express = require("express");
const { postUser } = require("../controllers/user.getRandom");

const router = express.Router();
/**
 * @api {get} /post a new user
 * @apiDescription user add a new user
 * @apiPermission everyone
 *
 * @apiHeader {String} Nothing
 *

 */
router.post("/", postUser);

module.exports = router;
