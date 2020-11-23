const promosData = require("../data/promos.json");
const studentsData = require("../data/students.json");

exports.promos = (req, res) => {
  res.render("promos", { promos: promosData });
};

exports.promo = (req, res) => {
  const id = Number(req.params.id);
  const promo = promosData.find((promo) => promo.id === id);
  res.render("promo", { promo });
};

exports.promoStudents = (req, res) => {
  const id = Number(req.params.id);
  const promo = promosData.find((promo) => promo.id === id);
  const students = studentsData.filter((student) => student.promo === id);
  res.render("students", { promo, students });
};
