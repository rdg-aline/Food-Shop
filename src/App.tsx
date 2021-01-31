import React from 'react';
import './App.css';
import Beer from './Components/Beer'
import Food from './Components/Food'


/**
 Projeto 3! Food Shop

Serão consumidas 4 (QUATRO) APIs

3 APIs para a parte de comidas e 1 da parte de bebida

Primeira API:

Listar todas as categorias de comidas

https://www.themealdb.com/api/json/v1/1/categories.php

Segunda API:

Buscar as comidas de acordo com a categoria selecionada (clicada):

https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef

Terceira API:

Buscar as comidas de acordo com o que foi digitado no input:

https://www.themealdb.com/api/json/v1/1/search.php?s=rice

ATENÇÃO: A SEGUNDA E A TERCEIRA API IRÃO ATUALIZAR O MESMO ESTADO


Quarta API (da parte de bebidas)

Ao clicar no botão Buscar cerveja dispare uma função que chama a api:

https://api.punkapi.com/v2/beers/?per_page=8
 */
 
function App() {
  return (
    <div className="App">
      <Food />
      <Beer />
    </div>
  );
}


export default App;