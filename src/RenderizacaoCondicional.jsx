import React, { useState } from "react";


const RendericacaoCondicional = () => {
  const [condicional, setCondicional] = useState(false);
  const [ternario, setTernario] = useState(false);

  const renderShowConditional = <p>
    Este conteúdo está sendo exibido com base na renderização condicional
  </p>;

  const renderShowTrueTernary = <p>
    Este conteúdo está sendo exibido com base na condição verdadeira do ternário
  </p>;

  const renderShowFalseTernary = <p>
    Este conteúdo está sendo exibido com base na condição falsa do ternário
  </p>;

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "300px"}}>
      <button 
        onClick={() => setCondicional(! condicional)}
      >
        {`${condicional ? "Ocultar" : "Exibir"} conteúdo (Renderização condicional)`}
      </button>

      {condicional && renderShowConditional}

      <button 
        onClick={() => setTernario(! ternario)}
      >
        {`${ternario ? "Ocultar" : "Exibir"} conteúdo (Renderização com ternários)`}
      </button>

      {ternario ? renderShowTrueTernary : renderShowFalseTernary} 
    </div>
  );
};

export default RendericacaoCondicional;