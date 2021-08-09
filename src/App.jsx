import React, { useState } from "react";


const App = () => {
  const [condicional, setCondicional] = useState(false);
  const [ternario, setTernario] = useState(false);

  const renderShowConditional = () => {
    return (
      <p>Este conteúdo está sendo exibido com base na renderização condicional</p>
    );
  };

  const renderShowTrueTernary = () => {
    return (
      <p>Este conteúdo está sendo exibido com base na condição verdadeira do ternário </p>
    );
  };

  const renderShowFalseTernary = () => {
    return (
      <p>Este conteúdo está sendo exibido com base na condição falsa do ternário </p>
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "300px"}}>
      <p>Projeto Introdução a ReactJS</p>

      <button 
        onClick={() => setCondicional(! condicional)}
      >
        {`${condicional ? "Ocultar" : "Exibir"} conteúdo (Renderização condicional)`}
      </button>

      {condicional && renderShowConditional()}

      <button 
        onClick={() => setTernario(! ternario)}
      >
        {`${ternario ? "Ocultar" : "Exibir"} conteúdo (Renderização com ternários)`}
      </button>

      {ternario ? renderShowTrueTernary() : renderShowFalseTernary()} 
    </div>
  );
};

export default App;