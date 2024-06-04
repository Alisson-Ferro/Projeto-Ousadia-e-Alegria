var database = require("../database/config");

function buscarUltimasMedidas(idAquario, limite_linhas) {

    var instrucaoSql = `SELECT 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        momento,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                    FROM medida
                    WHERE fk_aquario = ${idAquario}
                    ORDER BY id DESC LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {

    var instrucaoSql = `SELECT 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_aquario 
                        FROM medida WHERE fk_aquario = ${idAquario} 
                    ORDER BY id DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function verqtdTentaivas (){

var instrucaoSql = `SELECT COUNT(idQuiz) FROM quiz;`;

console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

    function registrarPontos(id, idPontuacao) {
        console.log("ACESSEI O MEDIDA MODEL para registrar os pontos do NeyQuiz", id, idPontuacao);
    
        var instrucao = `   
        INSERT INTO quiz (fkUsuario, fkPontuacao, dataRealizado) 
VALUES ('${id}','${idPontuacao}', NOW());
        `;
    
        console.log("Executando a instrução SQL: \n" + instrucao);
        return database.executar(instrucao);
    }



module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    verqtdTentaivas,
    registrarPontos
}
