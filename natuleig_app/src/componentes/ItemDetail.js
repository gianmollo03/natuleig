import React, { useContext } from "react";
import ItemCount from "./ItemCount";
import { Image } from "@chakra-ui/react";
import { useCarrito } from "../context/CartContext";

export const ItemDetail = ({ producto }) => {
  const { añadirItemCarrito } = useCarrito();
  const onAdd = (contador) => {
    producto.contador = contador;
    añadirItemCarrito(producto, producto.contador);
  };
  return (
    <>
      <div className="detailProductContainer">
        <div className="detailProductChild">
          <h2>Detalles del producto ID: {producto.id}</h2>
          <div className="detailProductImage">
            <Image src={producto.image} alt={producto.nombre}></Image>
          </div>
          <div className="detailProductName">{producto.nombre}</div>
          <div className="detailProductDesc">{producto.descripcion}</div>
          <div>
            <ItemCount
              initial={1}
              stock={producto.stock}
              onAdd={onAdd}
            ></ItemCount>
          </div>
        </div>
      </div>
    </>
  );
};
