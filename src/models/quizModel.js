var database = require("../database/config");

function salvarTentativa(idUsuario, quiz, acertos, total) {
    var instrucaoSql = `
        INSERT INTO quiz_tentativa (fk_usuario, quiz, acertos, total)
        VALUES (${idUsuario}, '${quiz}', ${acertos}, ${total});
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarResumosPorUsuario(idUsuario) {
    var instrucaoSql = `
        SELECT quiz,
               COUNT(*) AS tentativas,
               ROUND(AVG(acertos / total * 100)) AS media
        FROM quiz_tentativa
        WHERE fk_usuario = ${idUsuario}
        GROUP BY quiz
        ORDER BY quiz;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    salvarTentativa,
    buscarResumosPorUsuario
};
