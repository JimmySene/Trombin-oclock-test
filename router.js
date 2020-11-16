const express = require("express");
const router = express.Router();
const promos = require("./data/promos.json");

router.get("/", (req, res) => {
  res.render("accueil");
});

router.get("/promos", (req, res) => {
  res.render("promos", { promos });
});

module.exports = router;
