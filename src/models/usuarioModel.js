var database = require("../database/config");

function autenticar(email, senha) {
    var instrucaoSql = `
        SELECT id, nome, email FROM usuarios
        WHERE email = '${email}' AND senha_hash = SHA2('${senha}', 256);
    `;
    return database.executar(instrucaoSql);
}

function cadastrar(nome, email, senha) {
    var instrucaoSql = `
        INSERT INTO usuarios (nome, email, senha_hash)
        VALUES ('${nome}', '${email}', SHA2('${senha}', 256));
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar
};
