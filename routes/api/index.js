const router = require("express").Router();
const botRoutes = require("./bots");

// Book routes
router.use("/bots", botRoutes);

module.exports = router;
