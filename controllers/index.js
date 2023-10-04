const router = require("express").Router();
const dashboardRoutes = require("./dashboard-routes");
const homeRoutes = require("./homepage-routes");
const apiRoutes = require("./api");

router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/api", apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});

module.exports = router;
