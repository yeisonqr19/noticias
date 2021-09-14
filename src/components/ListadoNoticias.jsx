import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Noticia } from "./Noticia";

export const ListadoNoticias = ({ noticias }) => (
  <div className="row">
    {noticias.map((noticia) => (
      <Noticia key={uuidv4()} noticia={noticia} />
    ))}
  </div>
);
