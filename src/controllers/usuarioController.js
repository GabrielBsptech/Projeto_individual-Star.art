var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (!email || !senha) {
        return res.status(400).send("Informe email e senha.");
    }

    usuarioModel.autenticar(email, senha)
        .then(function (usuarios) {
            if (usuarios.length !== 1) {
                return res.status(403).send("Email e/ou senha inválidos.");
            }

            var usuario = usuarios[0];
            res.json({
                id: usuario.id,
                email: usuario.email,
                nome: usuario.nome
            });
        })
        .catch(function (erro) {
            console.error("Erro ao autenticar:", erro.sqlMessage || erro);
            res.status(500).json(erro.sqlMessage || "Erro ao autenticar.");
        });
}

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (!nome || !email || !senha) {
        return res.status(400).send("Preencha nome, email e senha.");
    }

    usuarioModel.cadastrar(nome, email, senha)
        .then(function (resultado) {
            res.status(201).json(resultado);
        })
        .catch(function (erro) {
            console.error("Erro ao cadastrar:", erro.sqlMessage || erro);
            res.status(500).json(erro.sqlMessage || "Erro ao cadastrar.");
        });
}

module.exports = {
    autenticar,
    cadastrar
};
