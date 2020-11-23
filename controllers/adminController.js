const dataMapper = require("../dataMapper");

exports.showAddStudent = (req, res, next) => {
  dataMapper.promos((promos) => {
    if (!promos) next();
    else res.render("addStudent", { promos });
  });
};

exports.addStudent = (req, res, next) => {
  dataMapper.addStudent(req.body, (idPromo) => {
    if (!idPromo) next();
    else res.redirect("/promo/" + idPromo + "/students");
  });
};
