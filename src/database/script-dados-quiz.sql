-- Script de dados de exemplo para o quiz
-- Execute depois do script-star-art.sql
-- Usuário de teste: aluno@starart.com / senha: 123456

USE star_art;

INSERT IGNORE INTO usuarios (nome, email, senha_hash)
VALUES ('Aluno Demo', 'aluno@starart.com', SHA2('123456', 256));

SET @id_aluno = (SELECT id FROM usuarios WHERE email = 'aluno@starart.com');

-- Limpa as tentativas antigas do usuário de teste para o script poder rodar novamente
DELETE FROM quiz_tentativa WHERE fk_usuario = @id_aluno;

-- Tentativas de exemplo (quiz, acertos, total)
INSERT INTO quiz_tentativa (fk_usuario, quiz, acertos, total) VALUES
(@id_aluno, 'Sistema Solar', 5, 5),
(@id_aluno, 'Sistema Solar', 4, 5),
(@id_aluno, 'Sistema Solar', 3, 5),
(@id_aluno, 'Exoplanetas', 4, 5),
(@id_aluno, 'Exoplanetas', 3, 5),
(@id_aluno, 'Buracos Negros', 3, 5);
