import React from "react";
import { productos } from "../utiles/productos";
import { CustomFetch } from "../utiles/customFetch";
import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { PageTemplate } from "./Page";
import database from "./firebase";
import { collection, getDocs } from "firebase/firestore";

const productosCollection = collection(database, "productos");

const ItemListContainer = (greeting) => {
  const [listaProductos, setListaProductos] = useState([]);
  const { categoria } = useParams();
  useEffect(() => {
    const consulta = getDocs(productosCollection);
    console.log(consulta);
    consulta
      .then((snapshot) => {
        const documentos = snapshot.docs;
        documentos.map((producto) => {
          return listaProductos.push(producto.data());
        });
        console.log(listaProductos);
      })
      .catch((error) => {
        console.log(error);
      });
    if (categoria) {
      setListaProductos(
        listaProductos.filter((producto) => producto.categoria === categoria)
      );
    } else {
      setListaProductos(listaProductos);
    }
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
