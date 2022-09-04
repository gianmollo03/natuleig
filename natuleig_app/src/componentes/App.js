import React from "react";
import Navbar from "./NavBar";
import Footer from "./footer";
import ItemListContainer from "./itemListContainer";
import { ChakraProvider } from "@chakra-ui/react";
import { ItemDetailContainer } from "./ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "../context/CartContext";
import { CartView } from "./CartView";
import database from "./firebase";

function App() {
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <CartContextProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<ItemListContainer />}></Route>
              <Route
                path="/categoria/:categoria"
                element={<ItemListContainer />}
              ></Route>
              <Route
                path="/producto/:id"
                element={<ItemDetailContainer />}
              ></Route>
              <Route
                path="/categoria/:categoria/producto/:id"
                element={<ItemDetailContainer />}
              ></Route>
              <Route path="/carrito" element={<CartView></CartView>}></Route>
              <Route
                path="/categoria/carrito"
                element={<CartView></CartView>}
              ></Route>
              <Route
                path="/categoria/:categoria/carrito"
                element={<CartView />}
              ></Route>
              <Route
                path="/categoria/:categoria/producto/carrito"
                element={<CartView />}
              ></Route>
              <Route
                path="/categoria/:categoria/producto/:id/carrito"
                element={<CartView />}
              ></Route>
            </Routes>
            <Footer />
          </CartContextProvider>
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}
export default App;
