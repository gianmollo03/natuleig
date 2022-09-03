import React from "react";
import { Item } from "./Item";
export const ItemList = ({ listaProductos }) => {
  return (
    <>
      {listaProductos.map((producto) => (
        <Item key={producto.id} producto={producto} className="item" />
      ))}
    </>
  );
};
