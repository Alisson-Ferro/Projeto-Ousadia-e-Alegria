var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
    res.render("index");
});

router.get("/verqtdTentaivas/:id", function (req, res) {
    medidaController.verqtdTentaivas(req, res);
});

router.post("/registrarPontos/:id", function (req, res) {
    medidaController.registrarPontos(req, res);
});

module.exports = router;