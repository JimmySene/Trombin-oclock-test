// Créer le serveur web
const express = require("express");
const app = express();
const router = require("./router");

app.set("view engine", "ejs");
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));

const session = require("express-session");
app.use(
  session({
    secret: "super secret",
  })
);

app.use((req, res, next) => {
  if (req.session.username) {
    res.locals.username = req.session.username;
  }
  next();
});

app.use(router);

app.listen(process.env.PORT || 3000);
