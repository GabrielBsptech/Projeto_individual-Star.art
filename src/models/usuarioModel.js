var database = require("../database/config");

function autenticar(email, senha) {
    var sql = `
        SELECT id, nome, email
        FROM usuarios
        WHERE email = ? AND senha_hash = SHA2(?, 256);
    `;
    return database.executar(sql, [email, senha]);
}

function cadastrar(nome, email, senha) {
    var sql = `
        INSERT INTO usuarios (nome, email, senha_hash)
        VALUES (?, ?, SHA2(?, 256));
    `;
    return database.executar(sql, [nome, email, senha]);
}

module.exports = {
    autenticar,
    cadastrar
};
