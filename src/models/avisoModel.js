var database = require("../database/config");

var sqlBase = `
    SELECT a.id AS idAviso,
           a.titulo,
           a.descricao,
           a.fk_usuario,
           u.id AS idUsuario,
           u.nome,
           u.email
    FROM aviso a
    INNER JOIN usuarios u ON a.fk_usuario = u.id
`;

function listar() {
    return database.executar(sqlBase + " ORDER BY a.id;");
}

function listarPorUsuario(idUsuario) {
    return database.executar(sqlBase + " WHERE u.id = ? ORDER BY a.id;", [idUsuario]);
}

function pesquisarDescricao(texto) {
    return database.executar(sqlBase + " WHERE a.descricao LIKE ? ORDER BY a.id;", ["%" + texto + "%"]);
}

function publicar(titulo, descricao, idUsuario) {
    var sql = "INSERT INTO aviso (titulo, descricao, fk_usuario) VALUES (?, ?, ?);";
    return database.executar(sql, [titulo, descricao, idUsuario]);
}

function editar(novaDescricao, idAviso) {
    var sql = "UPDATE aviso SET descricao = ? WHERE id = ?;";
    return database.executar(sql, [novaDescricao, idAviso]);
}

function deletar(idAviso) {
    var sql = "DELETE FROM aviso WHERE id = ?;";
    return database.executar(sql, [idAviso]);
}

module.exports = {
    listar,
    listarPorUsuario,
    pesquisarDescricao,
    publicar,
    editar,
    deletar
};
