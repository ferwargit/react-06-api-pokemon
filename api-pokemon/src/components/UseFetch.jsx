import { useState, useEffect } from "react";

export const UseFetch = (url) => {
  const [resultado, setResultado] = useState({ cargando: true, data: null });

  useEffect(() => {
    getDatos(url);
  }, [url]);

  async function getDatos(url) {
    try {
      setResultado({ cargando: true, data: null });
      const response = await fetch(url);
      const data = await response.json();
      // const respuesta = await response.json();
      // const json = respuesta.results;
      // console.log(json);
      // ordenar alfabeticamente
      // const data = json.sort((a, b) => {
      //   if (a.name > b.name) {
      //     return 1;
      //   }
      //   if (a.name < b.name) {
      //     return -1;
      //   }
      //   return 0;
      // });
        setResultado({ cargando: false, data: data });
      
    } catch (error) {
      console.log(error);
    }
  }

  return resultado;
};
