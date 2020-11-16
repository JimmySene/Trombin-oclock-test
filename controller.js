const promos = require("./data/promos.json");

exports.accueil = (req, res) => {
  res.render("accueil");
};

exports.promos = (req, res) => {
  res.render("promos", { promos });
};

exports.promo = (req, res) => {
  const id = Number(req.params.id);
  const promo = promos.find((promo) => promo.id === id);
  res.render("promo", { promo });
};
