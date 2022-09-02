import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { CustomFetch } from "../utiles/customFetch";
import { ItemDetail } from "./ItemDetail";
import { productos } from "../utiles/productos";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const { id } = useParams();

  useEffect(() => {
    CustomFetch(productos).then((res) => {
      setProducto(res.find((producto) => producto.id === parseInt(id)));
    });
  });

  return (
    <>
      <ItemDetail producto={producto}></ItemDetail>
    </>
  );
};
