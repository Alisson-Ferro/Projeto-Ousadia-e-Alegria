var database = require("../database/config");

function verqtdTentaivas(idUsuario) {
    console.log("ACESSEI O MEDIDA MODEL do NeyQuiz");
    var instrucaoSql = `SELECT COUNT(idQuiz) as 'tentativas' FROM quiz WHERE fkUsuario = ${idUsuario};`; 

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
    // .then(resultado => {
    //     if (resultado.length > 0) { 
    //         return resultado[0]['COUNT(idQuiz)'];
    //     } else {
    //         return 0;
    //     }
    // });
}
function registrarPontos(qtdPontos) {
    console.log("ACESSEI O MEDIDA MODEL para registrar os pontos do NeyQuiz", qtdPontos);

    var instrucao = `   
        INSERT INTO pontuacao (qtdPontos) VALUES (${qtdPontos});
        `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function registrarAssociativa(idUsuario, idPontuacao) {

    var instrucao = `   
        INSERT INTO quiz (fkUsuario, fkPontuacao, dataRealizado) VALUES (${idUsuario}, ${idPontuacao}, now());
        `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



module.exports = {
    verqtdTentaivas,
    registrarPontos,
    registrarAssociativa
}
