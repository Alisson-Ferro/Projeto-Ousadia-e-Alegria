CREATE DATABASE projetoNey;

USE projetoNey;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE contato (
  idContato INT AUTO_INCREMENT PRIMARY KEY,
  fkUsuario INT NOT NULL,
  mensagem TEXT,
  data_envio DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

CREATE TABLE pontuacao(
  idPontuacao INT AUTO_INCREMENT PRIMARY KEY,
  qtdPontos INT NOT NULL
);

CREATE TABLE quiz(
  idQuiz INT AUTO_INCREMENT,
  fkUsuario INT,
  fkPontuacao INT,
  dataRealizado DATETIME,
  PRIMARY KEY (idQuiz, fkUsuario, fkPontuacao),
  FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
  FOREIGN KEY (fkPontuacao) REFERENCES pontuacao(idPontuacao)
);


select * from usuario;
select * from contato;
select * from quiz;
select * from pontuacao;