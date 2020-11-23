const { Client } = require("pg");

require("dotenv").config();

const client = new Client();

client.connect((error) => {
  if (error) console.log("Problème de connexion à la bdd");
  else console.log("Connexion à la bdd OK !");
});

module.exports = client;
