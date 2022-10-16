const router = require("express").Router();
const { signup, signin } = require("../controllers/UserAuth");

router.post("/", signin);

router.post("/", signup);

module.exports = router;
