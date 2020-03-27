const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
/**
 * app.use(cors({ 
    origin: 'https://meuapp.com' //endereço de hospedagem do sistema
}));
 */
app.use(cors());

app.use(express.json());

app.use(routes);
/**
 * Rota e recursos

 */

/**
 * Método HTTP 
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação do back-end
 * PUT: Alterar uma informação do back-end
 * DELETE: remover uma informação do back-end
 */

/**
 * Tipos de parametros
 * query params : parametro nomeados enviados na rota apos "?" (Filtros, paginação)
 * route params:  Parâmetros utilizados para identificar recursos
 * Request Body:  Corpo da requisição utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc;
 */

/**
 * instalar Banco de dados
 * DRIVER: SELECT * FROM users
 * Query Builder: table('users').select('*').where()  => KNEX.JS  
 */

//rota GET
//app.get('/users', (request, response) => {
//   return response.json({ Mensagem: "Hello world" });
//});



app.listen(3333);