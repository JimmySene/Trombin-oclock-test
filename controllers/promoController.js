const dataMapper = require("../dataMapper");

exports.promos = (req, res, next) => {
  dataMapper.promos((promos) => {
    if (!promos) next();
    else res.render("promos", { promos });
  });
};

exports.promo = (req, res, next) => {
  dataMapper.promo(Number(req.params.id), (promo) => {
    if (!promo) next();
    else res.render("promo", { promo });
  });
};

exports.promoStudents = (req, res, next) => {
  dataMapper.promoStudents(Number(req.params.id), (promo, students) => {
    if (!promo || !students) next();
    res.render("students", { promo, students });
  });
};
