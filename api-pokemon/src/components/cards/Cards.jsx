import React from 'react';
import { CardPokemon } from './CardPokemon';
import './Cards.css';

export const Cards = ({results}) => {
  return (
    <div className='container'>
      <ul className='cards'>
        {
          results.map( pokemon => (
            <li className='card-item' key={pokemon.name}>
              <CardPokemon urlPokemon={pokemon.url} />
            </li>
          ))
        }
      </ul>
    </div>
  );
};
