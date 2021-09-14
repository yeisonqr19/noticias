import React from "react";
import styles from "./Form.module.css";
import { useSelect } from "../hooks/useSelect";
import { OPCIONES } from "../helpers/opciones";

export const Form = ({ setCategoria }) => {
  const [categoria, SelectNoticias] = useSelect("general", OPCIONES);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategoria(categoria);
  };

  return (
    <div className={`row ${styles.buscador} `}>
      <div className="col s12 m8 offset-m2">
        <form onSubmit={handleSubmit}>
          <h2 className={styles.heading}>Encuentra noticias por categoria</h2>

          <SelectNoticias />

          <div className="input-field col s12">
            <input
              type="submit"
              value="Buscar"
              className={`btn-large amber darken-2 ${styles.btn_block}`}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
