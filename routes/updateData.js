const express = require("express");
const updateOne = require("../controllers/user.getRandom");

const router = express.Router();

/**
 * @api {get} /get one user
 * @apiDescription user see one user after calling by id
 * @apiPermission everyone
 *
 
 */

router.patch("/:id", updateOne.updateUser);

module.exports = router;
