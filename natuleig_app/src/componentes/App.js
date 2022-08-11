import React from 'react'
import Header from "./NavBar";
import Footer from "./footer";
import ItemListContainer from './itemListContainer';
import {ChakraProvider} from '@chakra-ui/react'
import { ItemDetailContainer } from './ItemDetailContainer';
function App(){
    return (
        <>
        <ChakraProvider>
        <Header/>
        <main>
            <div>
                <h1>Natuleig</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero incidunt illum ad voluptatem eum quo.</p>
            </div>
        </main>

        <ItemListContainer/>
        <ItemDetailContainer/>
        <Footer/>
        </ChakraProvider>

        </>
    )
}
export default App;
