## Descrição
    TESTE TÉCNICO WORK ANYWHERE DESENVOLVIDO NODEJS

## Como rodar o serviço

```bash
docker-compose up
```
OBS: Ao executar esse comando o container consegue levantar os aplicativo, com banco de dados e rodar as migrations automaticamente.

## Como rodar os testes

```bash
yarn test

ou

npm run test
```
* OBS 1: Ao executar esse comando a tabela de filmes ira ser totalmente apagada, pois so estamos utilizando um banco de testes.
* OBS 2: Observar se o container docker está executando o banco de dados antes de rodar os testes.

## Documentação
### Consulte a url seguinte URL em seu navegador:
```bash
http://localhost:3000/api-docs/
```
### Tecnologias
```
* NodeJS: 16.17.0
* Typescript": ^4.8.4
* Jest: ^29.2.2,
* Supertest: ^6.3.1,
* Axios: ^1.1.3
* Postgres: 14.0.0
* Typeorm: ^0.2.29
```

### Diferenciais:
```
* Clean Code
* SOLID principles
* Clean Architecture
* POO
* Design Patterns
* Docker e Docker Compose
* Testes automatizados
* Boas práticas
```
