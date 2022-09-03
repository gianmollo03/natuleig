import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import database from "./firebase";
import { collection, getDocs } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const productosCollection = collection(database, "productos");
    const consulta = getDocs(productosCollection);
    consulta.then((snapshot) => {
      const productos = snapshot.docs.map((producto) => {
        return { ...producto.data(), id: producto.id };
      });
      setProducto(productos.find((producto) => producto.id === id));
    });
  });

  return (
    <>
      <ItemDetail producto={producto}></ItemDetail>
    </>
  );
};
