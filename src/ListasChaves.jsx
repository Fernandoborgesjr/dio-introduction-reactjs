import React from "react";
import { customers } from "./mock";

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