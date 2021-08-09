import React from "react";
import ListasChaves from "./ListasChaves";
import RendericacaoCondicional from "./RenderizacaoCondicional";

const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "300px" }}>
      <h1>Projeto Introdução a ReactJS</h1>
      <li>Renderização condicional</li>
      <RendericacaoCondicional/>
      <li>Listas e chaves</li>
      <ListasChaves/>
    </div>
  );
};

export default App;