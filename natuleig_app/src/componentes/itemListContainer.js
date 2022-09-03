import React from "react";
import { productos } from "../utiles/productos";
import { CustomFetch } from "../utiles/customFetch";
import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { PageTemplate } from "./Page";
import database from "./firebase";
import { collection, doc, getDocs } from "firebase/firestore";
import { list } from "@chakra-ui/react";

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
    <div id="listaDeItems">
      <PageTemplate titulo="Productos" subtitulo={categoria}>
        <ItemList listaProductos={listaProductos} />
      </PageTemplate>
    </div>
  );
};
export default ItemListContainer;
