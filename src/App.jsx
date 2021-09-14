import React, { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "./components/UI/Header";
import { Form } from "./components/Form";
import { ListadoNoticias } from "./components/ListadoNoticias";

function App() {
  const [categoria, setCategoria] = useState("");
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    
    if (categoria === "") return null;

    const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=2c14331891874d18b73a3729ae726fdc`;

    (async () => {
      const { data: noticias } = await axios.get(url);
      setNoticias(noticias.articles);
    })();
  }, [categoria]);

  return (
    <>
      <Header titulo="Buscador de Noticias" />
      <div className="container white">
        <Form setCategoria={setCategoria} />
        <ListadoNoticias noticias={noticias} />
      </div>
    </>
  );
}

export default App;
