docker pull mysql

docker run --name desafioave-db -e MYSQL_ROOT_PASSWORD=a123456 -e MYSQL_DATABASE=empresas-db -e MYSQL_USER=user -e MYSQL_PASSWORD=a1234567 -p 3306:3306 -d mysql

CREATE TABLE empresas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    razao_social VARCHAR(255) NOT NULL,
    cnpj VARCHAR(14) UNIQUE NOT NULL,
    logradouro VARCHAR(255),
    numero VARCHAR(10),
    complemento VARCHAR(255),
    municipio VARCHAR(100),
    uf CHAR(2)
);

node versao 18

para rodar o projeto: node app.js
