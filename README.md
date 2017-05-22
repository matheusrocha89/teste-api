# Teste simulado

## Rodando o projeto

Para rodar o projeto você precisa ter o `nodejs` e `npm` instalados.

Instalando dependências:

```
npm install
```

Rodando o projeto:

```
npm start
```

## Filtrando resultados

Use query strings para filtrar os resultados a partir dos atributos.
Exemplo:

```
http://localhost:8000/?assuntos=medicina
```

## Tipo de retorno
Para retornar outro tipo de formato use a querystring `type` com o valor to formato que deseja.
Exemplo:

```
http://localhost:8000/?assuntos=medicina&type=xml
```


## Paginação
Se nenhuma página for passada ele irá retornar todos os resultados. Caso a página for passada ele irá retornar de 2 em 2 resultados.
Para paginar passe a querystring `page`.
Exemplo:

```
http://localhost:8000/?assuntos=redacao&page=3
```
