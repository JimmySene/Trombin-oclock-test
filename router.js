const express = require("express");
const router = express.Router();

const mainController = require("./controllers/mainController");
const promoController = require("./controllers/promoController");
const studentController = require("./controllers/studentController");
const adminController = require("./controllers/adminController");

router.get("/", mainController.home);

router.get("/promos", promoController.promos);

router.get("/promo/:id", promoController.promo);

router.get("/promo/:id/students", promoController.promoStudents);

router.get("/student/:id", studentController.student);

router.get("/student/add", adminController.showAddStudent);

router.post("/student/add", adminController.addStudent);

router.get("/login", mainController.showLogin);

router.post("/login", mainController.login);

router.get("/logout", mainController.logout);

router.use(mainController.notFound);

module.exports = router;
