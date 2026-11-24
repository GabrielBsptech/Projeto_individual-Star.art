var avisoModel = require("../models/avisoModel");

function responder(res, promessa) {
    promessa
        .then(function (resultado) {
            if (Array.isArray(resultado) && resultado.length === 0) {
                res.status(204).send("Nenhum resultado encontrado!");
            } else {
                res.json(resultado);
            }
        })
        .catch(function (erro) {
            console.error("Erro nos avisos:", erro.sqlMessage || erro);
            res.status(500).json(erro.sqlMessage || "Erro nos avisos.");
        });
}

function listar(req, res) {
    responder(res, avisoModel.listar());
}

function listarPorUsuario(req, res) {
    responder(res, avisoModel.listarPorUsuario(req.params.idUsuario));
}

function pesquisarDescricao(req, res) {
    responder(res, avisoModel.pesquisarDescricao(req.params.descricao));
}

function publicar(req, res) {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    var idUsuario = req.params.idUsuario;

    if (!titulo || !descricao || !idUsuario) {
        return res.status(400).send("Preencha título, descrição e usuário.");
    }

    responder(res, avisoModel.publicar(titulo, descricao, idUsuario));
}

function editar(req, res) {
    responder(res, avisoModel.editar(req.body.descricao, req.params.idAviso));
}

function deletar(req, res) {
    responder(res, avisoModel.deletar(req.params.idAviso));
}

module.exports = {
    listar,
    listarPorUsuario,
    pesquisarDescricao,
    publicar,
    editar,
    deletar
};
