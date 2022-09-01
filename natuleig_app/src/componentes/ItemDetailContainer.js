import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { CustomFetch } from "../utiles/customFetch";
import { ItemDetail } from "./ItemDetail";
import { productos } from "../utiles/productos";
import { Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    CustomFetch(productos).then((res) => {
      setLoading(false);
      setProducto(res.find((producto) => producto.id === parseInt(id)));
    });
  }, loading);

  return (
    <>
      {!loading ? (
        <ItemDetail producto={producto}></ItemDetail>
      ) : (
        <Text>Cargando...</Text>
      )}
    </>
  );
};
