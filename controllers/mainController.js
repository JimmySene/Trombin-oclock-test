exports.home = (req, res) => {
  res.render("home");
};

exports.notFound = (req, res) => {
  res.render("404");
};

exports.showLogin = (req, res) => {
  res.render("login");
};

exports.login = (req, res, next) => {
  if (req.body.username) req.session.username = req.body.username;
  res.redirect("/");
};

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect("/");
};
