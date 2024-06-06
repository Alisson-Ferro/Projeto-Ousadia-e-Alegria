var quizModel = require("../models/quizModel");

function verqtdTentaivas(req, res) {
    var idUsuario = req.body.idUsuarioServer; // Pega o id do usuário do corpo da requisição

    console.log(`Recuperando medidas em tempo real`);

    quizModel.verqtdTentaivas(idUsuario) // Passa o id do usuário para o model
        .then(contagem => {
            let tentativas = contagem[0].tentativas
            res.status(200).json(tentativas); // Envia a contagem como JSON
        })
        .catch(function (erro) {
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