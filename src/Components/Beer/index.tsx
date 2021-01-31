import React, { useState } from 'react';
import Axios from 'axios'
import { InterfaceBeer } from '../../types/InterfaceBeer'


const Beer = () => {

  const [beer, setBeer] = useState<InterfaceBeer[]>([])

  const getBeer = () => {
    Axios.get("https://api.punkapi.com/v2/beers/?per_page=8")
      .then(resposta => setBeer(resposta.data))
  }

  return (

    <div className="food-beer-list food-shop">

      <h1>Tipos de Cerveja</h1>
      <button onClick={getBeer}> Buscar Cerveja</button>
      <div className="beers-list">
        {beer !== null && beer.map((item: InterfaceBeer) => (
          <div className="beer" key={item.id}>
            <img src={item.image_url} alt="Buzz" />
            <h3>{item.name}</h3>
            <span>{item.tagline}</span>
            <small> {item.description} </small>
          </div>))}
      </div>
    </div>
  );
}




export default Beer;