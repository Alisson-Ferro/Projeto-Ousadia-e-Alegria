var quizModel = require("../models/quizModel");

function verqtdTentaivas(idQuiz) {
    var idQuiz = req.params.idQuiz;

    console.log(`Recuperando medidas em tempo real`);

    quizModel.verqtdTentaivas(idQuiz).then(function () {
        res.status(200).send("");
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function registrarPontos(req, res) {
    var qtdPontos = req.body.qtdPontos;
    var idUsuario = req.body.idUsuario;

    quizModel.registrarPontos(qtdPontos)
        .then(
            function (resultado) {
                quizModel.registrarAssociativa(idUsuario, resultado.insertId)
                    .then((resposta2) => {
                        res.status(200).send("");
                    })
                    .catch((erro) => {
                        res.status(500).json(erro.sqlMessage);
                    })
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}


module.exports = {
    verqtdTentaivas,
    registrarPontos

}