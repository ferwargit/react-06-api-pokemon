import React, { useState } from "react";
import { UseFetch } from "./UseFetch";

const Pokemon = () => {

  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const estado = UseFetch(url);
  const {cargando, data} = estado;
  cargando ? console.log("Cargando...") : console.log(data.results);

  return (
    <>
      <h1>Esta es la página de Pokemon</h1>
    </>
  );
}

export default Pokemon;