const router = require("express").Router();
const message = require("./message-route");

// Routes
router.use("/message", message);

module.exports = router