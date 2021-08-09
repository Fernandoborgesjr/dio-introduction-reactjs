import React from "react";

const customers = [
  {
    id: 1,
    nome: 'Fernando'
  },
  {
    id: 2,
    nome: 'Moreira'
  },
  {
    id: 3,
    nome: 'Borges'
  }
];

const ListasChaves = () => {
  const renderShowCustomer = (customer) => {
    return (
      <li key={`customer-${customer.id}`}>{customer.nome}</li>
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "300px" }}>
      <ul>
        {customers.map(renderShowCustomer)}
      </ul>
    </div>
  );
};

export default ListasChaves;