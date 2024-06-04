CREATE DATABASE projetoNey;
USE projetoNey;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE contato (
  idContato INT AUTO_INCREMENT PRIMARY KEY,
  nome varchar(100),
  email varchar(100),
  mensagem TEXT,
  data_envio DATETIME DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE pontuacao(
  idPontuacao INT AUTO_INCREMENT PRIMARY KEY,
  qtdPontos INT NOT NULL,
  constraint chkPontuacao check ( qtdPontos > 0 and qtdPontos <=10)
);

CREATE TABLE quiz(
  idQuiz INT AUTO_INCREMENT,
  fkUsuario INT,
  fkPontuacao INT,
  dataRealizado DATETIME,
  PRIMARY KEY (idQuiz, fkUsuario, fkPontuacao),
  FOREIGN KEY (fkUsuario) REFERENCES usuario(id),
  FOREIGN KEY (fkPontuacao) REFERENCES pontuacao(idPontuacao)
);


select * from usuario;
select * from contato;
SELECT COUNT(idQuiz) FROM quiz;
select * from quiz;
select * from pontuacao;

-- Inserir uma nova pontuação na tabela pontuacao
INSERT INTO pontuacao (qtdPontos) 
VALUES (10);

-- Obter o idPontuacao da nova pontuação
SELECT idPontuacao FROM pontuacao ORDER BY idPontuacao DESC LIMIT 1; 

-- Inserir um novo quiz na tabela quiz
INSERT INTO quiz (fkUsuario, fkPontuacao, dataRealizado) 
VALUES (1, 1, NOW());
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