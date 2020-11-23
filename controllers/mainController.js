exports.home = (req, res) => {
  res.render("home");
};

exports.notFound = (req, res) => {
  res.render("404");
};
