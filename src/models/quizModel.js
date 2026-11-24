var database = require("../database/config");

function salvarTentativa(idUsuario, quiz, acertos, total) {
    var sql = `
        INSERT INTO quiz_tentativa (fk_usuario, quiz, acertos, total)
        VALUES (?, ?, ?, ?);
    `;
    return database.executar(sql, [idUsuario, quiz, acertos, total]);
}

function buscarResumosPorUsuario(idUsuario) {
    var sql = `
        SELECT quiz,
               COUNT(*) AS tentativas,
               ROUND(AVG(acertos / total * 100)) AS media
        FROM quiz_tentativa
        WHERE fk_usuario = ?
        GROUP BY quiz
        ORDER BY quiz;
    `;
    return database.executar(sql, [idUsuario]);
}

module.exports = {
    salvarTentativa,
    buscarResumosPorUsuario
};
