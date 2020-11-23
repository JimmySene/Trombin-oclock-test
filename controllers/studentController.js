const dataMapper = require("../dataMapper");

exports.student = (req, res, next) => {
  dataMapper.student(Number(req.params.id), (student, promo) => {
    if (!student || !promo) next();
    else res.render("student", { student, promo });
  });
};
