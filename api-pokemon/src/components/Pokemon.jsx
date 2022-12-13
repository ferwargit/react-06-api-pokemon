import React, { useState } from "react";
import { UseFetch } from "./UseFetch";
import { Cards } from "./cards/Cards";

const Pokemon = () => {

  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const estado = UseFetch(url);
  const {cargando, data} = estado;
  cargando ? console.log("Cargando...") : console.log(data.results);

  return (
    <>
      <h1>La página de los Pokemones</h1>

      {
        cargando
        ?
        <h1>Cargando...</h1>
        :
        <Cards results={data.results} />
      }

    </>
  );
}

export default Pokemon;