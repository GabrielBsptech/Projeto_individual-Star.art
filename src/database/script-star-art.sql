-- Script do banco de dados do projeto star.art
-- Execute este arquivo no MySQL antes de rodar a aplicação.
-- As credenciais usadas pela API estão em .env.dev (DB_DATABASE=star_art).

CREATE DATABASE IF NOT EXISTS star_art;
USE star_art;

CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    senha_hash VARCHAR(255) NOT NULL,
    dt_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE aviso (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100),
    descricao VARCHAR(150),
    fk_usuario INT,
    FOREIGN KEY (fk_usuario) REFERENCES usuarios(id)
);

CREATE TABLE quiz_tentativa (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fk_usuario INT NOT NULL,
    quiz VARCHAR(100) NOT NULL,
    acertos INT NOT NULL,
    total INT NOT NULL,
    dt_tentativa TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (fk_usuario) REFERENCES usuarios(id)
);
