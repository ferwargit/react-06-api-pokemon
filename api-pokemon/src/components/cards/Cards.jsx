import React from 'react';
import { CardPokemon } from './CardPokemon';

export const Cards = ({results}) => {
  return (
    <div className='container'>
      <ul className='cards'>
        {
          results.map( pokemon => (
            <li className='card-item' key={pokemon.name}>
              <CardPokemon url={pokemon.url} />
            </li>
          ))
        }
      </ul>
    </div>
  );
};
