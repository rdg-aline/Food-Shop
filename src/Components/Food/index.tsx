import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import { InterfaceCategoria } from '../../types/InterfaceCategoria'
import { InterfaceComida } from '../../types/InterfaceComida';


const Foods = () => {

  const [categoria, setCategoria] = useState<InterfaceCategoria[]>([])
  const [selectedCategoria, SelectedCat]= useState<String>("") 
  const [comida, setComida]= useState<InterfaceComida[]>([]) 
  const [pesquisa, setPesquisa]=useState<String>()
  
  useEffect(() => {
    Axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(resposta => setCategoria(resposta.data.categories))
  }, [])

  
  useEffect(() => {
    if (selectedCategoria !== ""){
    Axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategoria}`)
      .then(resposta => setComida (resposta.data.meals))
    }
  }, [selectedCategoria])

  
  useEffect(() => {
    if (pesquisa !== null ){
    Axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${pesquisa}`)
      .then(resposta => setComida (resposta.data.meals))
    }
  }, [pesquisa])

  
  

  return (
    <div className="food-beer-list food-shop">
      <h1>Tipos de pratos</h1>
      <p>
        Selecione uma categoria ou digite a comida (em inglês):
        <input type="text" placeholder="Digite a comida..." onChange={(event) => setPesquisa  (event.target.value)}/>
      </p>

      <ul >
        <>
          {
            categoria !== null &&
            categoria.map((item: InterfaceCategoria) => (
              <li key={item.idCategory}  onClick={() => SelectedCat(item.strCategory)}>
                {item.strCategory}
              </li> ))
          }
        </>
      </ul>

      <h2>Tipo selecionado: <strong> {selectedCategoria}</strong></h2>
        
      

      <div className="food-container">
        <>
          {
            comida !== null  && comida.map((item: InterfaceComida) => (
              <div className="food-item" key={item.idMeal}>
                <img src={item.strMealThumb} alt={item.strMeal}/>
                 <p>{item.strMeal}</p>
               </div>
            ))
          }
        </>
            
       </div>
       </div>
    );
}

export default Foods;