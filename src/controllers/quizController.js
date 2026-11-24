var quizModel = require("../models/quizModel");

function salvar(req, res) {
    var idUsuario = parseInt(req.body.idUsuario);
    var quiz = String(req.body.quiz || "").trim();
    var acertos = parseInt(req.body.acertos);
    var total = parseInt(req.body.total);

    if (isNaN(idUsuario)) {
        return res.status(400).send("ID do usuário inválido.");
    }
    if (!quiz) {
        return res.status(400).send("Informe o quiz.");
    }
    if (isNaN(acertos) || isNaN(total) || total <= 0) {
        return res.status(400).send("Acertos e total devem ser números válidos.");
    }
    if (acertos < 0 || acertos > total) {
        return res.status(400).send("Os acertos devem ficar entre 0 e o total.");
    }

    quizModel.salvarTentativa(idUsuario, quiz.slice(0, 100), acertos, total)
        .then(function (resultado) {
            res.status(201).json({ id: resultado.insertId });
        })
        .catch(function (erro) {
            console.error("Erro ao salvar tentativa:", erro.sqlMessage || erro);
            res.status(500).json(erro.sqlMessage || "Erro ao salvar tentativa.");
        });
}

function dashboard(req, res) {
    var idUsuario = parseInt(req.params.idUsuario);

    if (isNaN(idUsuario)) {
        return res.status(400).send("ID do usuário inválido.");
    }

    quizModel.buscarResumosPorUsuario(idUsuario)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.error("Erro ao buscar dados do quiz:", erro.sqlMessage || erro);
            res.status(500).json(erro.sqlMessage || "Erro ao buscar dados do quiz.");
        });
}

module.exports = {
    salvar,
    dashboard
};
