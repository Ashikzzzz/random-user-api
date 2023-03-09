const express = require("express");
const userRoute = require("../controllers/user.getRandom");

const router = express.Router();

/**
 * @api {get} /get random api
 * @apiDescription view user random data after every
 * @apiPermission everyone
 *
 * @apiHeader {String} Nothingn
 *
 * @apiParam  {Number{1-}}         [page=1]     List page
 * @apiParam  {Number{1-100}}      [limit=10]  Users per page
 *
 * @apiSuccess {Object[]} random user info one by one
 *
 * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
 * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
 */
// random user
router.get("/", userRoute.randomUser);

module.exports = router;
