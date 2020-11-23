const students = require("../data/students.json");
const promos = require("../data/promos.json");

exports.student = (req, res, next) => {
  const id = Number(req.params.id);
  const student = students.find((student) => student.id === id);
  if (student) {
    const promo = promos.find((promo) => promo.id === student.promo);
    res.render("student", { student, promo });
  } else next();
};
