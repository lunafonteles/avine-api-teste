const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(bodyParser.json());
app.use(cors());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'a1234567',
    database: 'empresas-db'
});

// Rota de exemplo
app.post('/api/salvarEmpresa', (req, res) => {
    const dadosEmpresa = {
        razao_social: req.body.razao_social,
        cnpj: req.body.estabelecimento.cnpj,
        logradouro: req.body.estabelecimento.tipo_logradouro + " "+ req.body.estabelecimento.logradouro,
        numero: req.body.estabelecimento.numero,
        complemento: req.body.estabelecimento.complemento,
        municipio: req.body.estabelecimento.cidade.nome,
        uf: req.body.estabelecimento.estado.sigla
      };
    
      connection.query('INSERT INTO empresas SET ?', dadosEmpresa, (error, results) => {
        if (error) {
          console.error('Erro ao inserir dados:', error);
          res.status(500).json({ mensagem: 'Erro ao inserir dados' });
          return;
        }
        console.log('Dados inseridos com sucesso:', results);
        res.json({ mensagem: 'Dados inseridos com sucesso' });
      });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});