# origo-api

API criada em node.js com clean architecture, clean code e solid.

Frameworks e libs utilizadas:

express.js para gerenciar requisições HTTP e expor rotas.
typescript com orientação objeto.
jwt para autenticar as rotas.
module-alias para facilitar o acesso aos diretorios
moment para munipulação de datas.
yup para validação.
nodemon para facilitar subir a api toda vez que tenha um arquivo alterado.

Docker utilizado.

Para subir o banco de dados mongo para desenvolvimento no conteiner.
docker-compose up 


Crei um rota de health check
http://localhost:3036/health-check

Crei a documentação em swagger, apenas de 1 rota para mostrar o conhecimento.
http://localhost:3036/api-docs/#/

Criei o middleware de autenticação para mostrar o conhecimento em middleware e jwt.
Foi comentado na rota esse middleware, pois não criei a parte de login que gerava o token.
