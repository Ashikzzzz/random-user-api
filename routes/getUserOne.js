const express = require("express");
const getOneData = require("../controllers/user.getRandom");

const router = express.Router();

/**
 * @api {get} /get random api
 * @apiDescription view user random data after every
 * @apiPermission everyone
 *
 
 */
router.get("/:id", getOneData.getOneUSer);

module.exports = router;
