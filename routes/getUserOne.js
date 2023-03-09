const express = require("express");
const getOneData = require("../controllers/user.getRandom");

const router = express.Router();

/**
 * @api {get} /get one user
 * @apiDescription user see one user after calling by id
 * @apiPermission everyone
 *
 
 */
router.get("/:id", getOneData.getOneUSer);

module.exports = router;
