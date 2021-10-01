## Sobre a API

Esta é uma API simples de consulta de filmes utilizando a API THE MOVIE DB desenvolvida para o teste pratico no Instituto Atlantico

## Como instalar?

1.  Para iniciar clone o repositorio na sua pasta de projeto
2.  Entre no diretorio raiz do projeto e digite no terminal de comando: docker-compose up;
3.  Pronto, pode utilizar;

## Como utilizar?

A API disponibiliza uma rota para consulta de filmes com suporte para filtros:
http://localhost:3333/movies

a rota de consulta suporta os seguintes filtros que devem ser enviados pela query: - api_key: string - chave de acesso a api THEMOVIEDB, essa chave ém pessoal e obrigatoria - with_genres - string - recebe os id dos generos disponiveis para filtragem - sort_by - string - opções de filtragem e ordenação - Valores disponiveis: - popularity.asc, popularity.desc, release_date.asc, release_date.desc, revenue.asc, revenue.desc,
primary_release_date.asc, primary_release_date.desc, original_title.asc, original_title.desc,
vote_average.asc, vote_average.desc, vote_count.asc, vote_count.desc.
Default: popularity.desc

A API disponibiliza uma rota para consulta dos generos de filmes disponiveis para listagem:
http://localhost:3333/genres

a rota de consulta suporta os seguintes filtros que devem ser enviados pela query: - api_key: string - chave de acesso a api THEMOVIEDB, essa chave ém pessoal e obrigatoria - language - tradução dos filtros (Ex: pt-BR). Default: en-US.

A API disponibiliza uma rota para consulta de filme pelo nome:
http://localhost:3333/search

A rota de consulta suporta os seguintes filtros que devem ser enviados pela query: - api_key: string - chave de acesso a api THEMOVIEDB, essa chave ém pessoal e obrigatoria - query - string - Nome do filme (suporta qualquer idioma).
