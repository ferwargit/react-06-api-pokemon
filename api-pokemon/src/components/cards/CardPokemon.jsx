import React from 'react';
import { UseFetch } from '../UseFetch'
import './CardPokemon.css';

export const CardPokemon = ({urlPokemon}) => {

  const estado = UseFetch(urlPokemon);
  const {cargando, data} = estado;

  return (
    <div>
      {
        cargando
        ?
        <h1>Cargando...</h1>
        :
        <div className='cards-po'>
          <div className='card-header'>
            <h5 className='card-title'>{data.id}</h5>
          </div>
          <div className='card-body'>
            <img class="img-responsive" src={data.sprites.front_default} alt='imagen-pokemon'/>
          </div>
          <div className='card-footer'>
            <p className='card-text text-capitalize'><strong>{data.forms[0].name}</strong></p>
          </div>
        </div>
      }
    </div>
  );
};
