# Rinha de Backend

## Resumo

- As APIs precisam expor endpoints iguais e necessariamente usar um dos seguintes bancos de dados (à sua escolha): Postgres, MySQL, ou MongoDB.
- O "deploy" da API será feito via docker-compose com limites de CPU e memória.
- O teste será executado em EC2 devidamente configurado e a limitação de CPU e memória será interessante para exercitarmos ambientes com limitações, use a criatividade;
- A ferramenta [Gatling](https://gatling.io/) será usada para rodar os testes de stress.
- A essência desse torneio não é a competição em si (até mesmo pq não ganha nada quem vencer kkk), mas compartilhar conhecimento.
- Os detalhes do teste de stress [estão aqui!](/stress-test/README.md)
- Você tem até a meia-noite do dia **22/08** aka `2023-08-22T23:59:59-03:00` para submeter seu PR. No dia 25/08 haverá uma live em https://www.youtube.com/zanfranceschi para transmitir a Rinha de Backend do vivo.


## Endpoints
As APIs precisam expor 3 (4, na verdade) endpoints:

- `POST /pessoas` – para criar um recurso pessoa.
- `GET /pessoas/[:id]` – para consultar um recurso criado com a requisição anterior.
- `GET /pessoas?t=[:termo da busca]` – para fazer uma busca por pessoas.
- `GET /contagem-pessoas` – endpoint especial para contagem de pessoas cadastradas.
