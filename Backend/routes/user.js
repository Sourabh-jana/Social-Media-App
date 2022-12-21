const express = require("express");
const { regsiterUser, login } = require("../controllers/user")

const router = express.Router();

router.route("/register").post(regsiterUser);

router.route("/login").post(login);

module.exports = router;