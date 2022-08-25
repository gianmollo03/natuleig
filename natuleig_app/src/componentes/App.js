import React from 'react'
import Navbar from "./NavBar";
import Footer from "./footer";
import ItemListContainer from './itemListContainer';
import {ChakraProvider} from '@chakra-ui/react'
import { ItemDetailContainer } from './ItemDetailContainer';
import { BrowserRouter , Routes,Route} from "react-router-dom";
import { CartContext } from './CartContext';
import {createContext} from 'react'

const Contexto = createContext()
console.log(Contexto)
function App(){
    return (
        <>
        <ChakraProvider>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<ItemListContainer/>}></Route>
            <Route path='/categoria/:categoria' element={<ItemListContainer/>}></Route>
            <Route path='/producto/:id' element={<ItemDetailContainer/>}></Route>
            <Route path='/categoria/:categoria/producto/:id' element={<ItemDetailContainer/>}></Route>
            <Route path='/categoria/:categoria/carrito' element={<CartContext/>}></Route>
            <Route path='/carrito' element={<CartContext/>}></Route>
            <Route path='/producto/:id/carrito' element={<CartContext/>}></Route>
            <Route path='/categoria/:categoria/producto/:id/carrito' element={<CartContext/>}></Route>
        </Routes>
        
        <Footer/>
        </BrowserRouter>
        </ChakraProvider>

        </>
    )
}
export default App;
