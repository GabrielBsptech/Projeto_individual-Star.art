var quizModel = require("../models/quizModel");

function salvar(req, res) {
    var idUsuario = parseInt(req.body.idUsuario);
    var quiz = req.body.quiz;
    var acertos = parseInt(req.body.acertos);
    var total = parseInt(req.body.total);

    if (isNaN(idUsuario)) {
        res.status(400).send("O id do usuário está undefined ou inválido!");
    } else if (quiz == undefined || quiz == "") {
        res.status(400).send("O quiz está undefined!");
    } else if (isNaN(acertos) || isNaN(total) || total <= 0) {
        res.status(400).send("Os acertos e o total devem ser números válidos!");
    } else if (acertos < 0 || acertos > total) {
        res.status(400).send("Os acertos não podem ser menores que zero nem maiores que o total!");
    } else {
        quiz = String(quiz).replace(/'/g, "''").slice(0, 100);

        quizModel.salvarTentativa(idUsuario, quiz, acertos, total)
            .then(function (resultado) {
                res.status(201).json({ id: resultado.insertId });
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao salvar a tentativa do quiz! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function dashboard(req, res) {
    var idUsuario = parseInt(req.params.idUsuario);

    if (isNaN(idUsuario)) {
        res.status(400).send("O id do usuário está inválido!");
    } else {
        quizModel.buscarResumosPorUsuario(idUsuario)
            .then(function (resultado) {
                res.status(200).json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao buscar os dados do quiz! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    salvar,
    dashboard
};
