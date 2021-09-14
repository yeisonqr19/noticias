import React, { useState } from "react";

export const useSelect = (initialState, opciones) => {
  const [state, setstate] = useState(initialState);
  const selectNoticias = () => (
    <select
      className="browser-default"
      value={state}
      onChange={({ target }) => setstate(target.value)}
    >
      {opciones?.map((opcion) => (
        <option key={opcion.id} value={opcion.value}>
          {opcion.label}
        </option>
      ))}
    </select>
  );

  return [state, selectNoticias];
};
