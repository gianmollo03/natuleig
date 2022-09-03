import React from "react";

import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import database from "./firebase";
import { collection, getDocs } from "firebase/firestore";

const ItemListContainer = (greeting) => {
  const [listaProductos, setListaProductos] = useState([]);
  const { categoria } = useParams();
  useEffect(() => {
    const productosCollection = collection(database, "productos");
    const consulta = getDocs(productosCollection);
    consulta
      .then((snapshot) => {
        const productos = snapshot.docs.map((producto) => {
          return { ...producto.data(), id: producto.id };
        });
        if (categoria) {
          setListaProductos(
            productos.filter((prod) => prod.categoria === categoria)
          );
        } else {
          setListaProductos(productos);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoria]);
  return (
    <div className="listaItems">
      <ItemList listaProductos={listaProductos} />;
    </div>
  );
};
export default ItemListContainer;
