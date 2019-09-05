CREATE DATABASE mural;

CREATE TABLE tb_pessoa
(
    id_mural         INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    ds_nome           VARCHAR(100) NOT NULL,
	titulo           VARCHAR(100) NOT NULL,
	descricao        VARCHAR(100) NOT NULL,
	dataPublicacao   VARCHAR(100) NOT NULL,
	dataVisualizacao  VARCHAR(100) NOT NULL,
    fl_ativo          bit     NOT NULL
	
);

INSERT INTO tb_pessoa ('id_pessoa', 'ds_nome','titulo','descricao','dataVisualizacao','fl_ativo') 
VALUES 
('1', 'Teste Nome 1','Teste Titulo 1','Teste Descrição 1','05/09/2019','05/09/2019','1');

INSERT INTO tb_pessoa ('id_pessoa', 'ds_nome','titulo','descricao','dataVisualizacao','fl_ativo') 
VALUES 
('2', 'Teste Nome 2','Teste Titulo 2','Teste Descrição 2','05/09/2019','05/09/2019','1');

INSERT INTO tb_pessoa ('id_pessoa', 'ds_nome','titulo','descricao','dataVisualizacao','fl_ativo') 
VALUES 
('3', 'Teste Nome 3','Teste Titulo 3','Teste Descrição 3','05/09/2019','05/09/2019','1');