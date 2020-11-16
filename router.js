const express = require("express");
const router = express.Router();
const promos = require("./data/promos.json");

router.get("/", (req, res) => {
  res.render("accueil");
});

router.get("/promos", (req, res) => {
  res.render("promos", { promos });
});

router.get("/promo/:id", (req, res) => {
  const id = Number(req.params.id);
  const promo = promos.find((promo) => promo.id === id);
  res.render("promo", { promo });
});

module.exports = router;
