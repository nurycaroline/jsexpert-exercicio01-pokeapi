# Story: Seu primeiro time pokemon

A idéia é testar os fundamentos de `testing`, aplicando o que foi visto no `JS Expert - Módulo 02` num projeto simples e divertido.

Consumindo a [PokeAPI](https://pokeapi.co/), faça uma API que retorne 3 pokemóns aleatórios para formar seu time inicial numa jornada pokemon.

## Requisitos

### Funcionalidades

1.`GET /`

Deve ser a rota padrão da aplicação ao tentar acessar qualquer rota inexistente. (ex.: `/hi`, `/hello`)

2.`GET /team`

Deve retornar um array com 3 pokemóns aleatórios, contendo seus respectivos `name` e `moves`, (mostrando apenas um array de strings com os 3 primeiros `moves` presentes na API. ex.: `["mega-punch","fire-punch","thunder-punch"]`).

### Testes

* [x] mocks
* [x] stubs
* [x] spies
* [x] testes end-2-end
* [x] testes unitários
* [x] 100% de code coverage

### Extras

* [ ] TDD e BDD, será que rola? Acho que vale a tentativa!
* [x] Que tal consumir a API sem usar libs externas? o módulo `https` do node pode ser bem interessante!

## Installing

Clone o projeto

```bash
git clone https://github.com/nurycaroline/jsexpert-exercicio01-pokeapi.git
```

Instale as dependencias do projeto

```bash
yarn
# or
npm install
```

Iniciar o projeto

```bash
yarn start
# or
npm start
```

Executar os testes

```bash
yarn test
# or
npm test
```

Executar os testes com o relatório de cobertura

```bash
yarn test:cov
# or
npm test:cov
```
