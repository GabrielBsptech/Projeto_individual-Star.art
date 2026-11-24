var mysql = require("mysql2");

var mySqlConfig = {
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
};

function executar(instrucaoSql, valores) {
    var ambiente = process.env.AMBIENTE_PROCESSO;

    if (ambiente !== "producao" && ambiente !== "desenvolvimento") {
        return Promise.reject("AMBIENTE NÃO CONFIGURADO EM .env");
    }

    return new Promise(function (resolve, reject) {
        var conexao = mysql.createConnection(mySqlConfig);

        conexao.query(instrucaoSql, valores || [], function (erro, resultados) {
            conexao.end();

            if (erro) {
                reject(erro);
            } else {
                resolve(resultados);
            }
        });
    });
}

module.exports = {
    executar
};
