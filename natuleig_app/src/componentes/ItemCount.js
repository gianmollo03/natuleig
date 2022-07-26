import React from "react";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const stockValor = stock;
  const [contador, setContador] = useState(initial);
  const aumentarContador = () => {
    if (contador === stockValor) {
      console.log("El contador es o sera mayor que el stock");
    } else {
      setContador(contador + 1);
    }
  };

  const disminuirContador = () => {
    if (contador === 0) {
      console.log("El contador sera menor que el stock");
    } else {
      setContador(contador - 1);
    }
  };
  const confirmarCarrito = () => {
    onAdd(contador);
  };

  return (
    <div className="grupoBotonesCarritoContainer">
      <div className="botonesContadorContainer">
        <button onClick={disminuirContador}>-1</button>
        <p>{contador}</p>
        <button onClick={aumentarContador}>+1</button>
      </div>
      <div className="botonCarritoContainer">
        <button onClick={confirmarCarrito} id="botonAñadirCarrito">
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};
export default ItemCount;
