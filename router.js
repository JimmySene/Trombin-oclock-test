const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/", controller.accueil);

router.get("/promos", controller.promos);

router.get("/promo/:id", controller.promo);

module.exports = router;
