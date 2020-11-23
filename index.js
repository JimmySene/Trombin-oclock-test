// Créer le serveur web
const express = require("express");
const app = express();
const router = require("./router");

require("dotenv").config();

app.set("view engine", "ejs");
app.use(express.static("./public"));

app.use(router);

app.listen(process.env.PORT || 3000);
