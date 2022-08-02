import React from 'react'
import Header from "./NavBar";
import Footer from "./footer";
import ItemListContainer from './itemListContainer';

function App(){
    return (
        <>
        <Header/>
        <main>
            <div>
                <h1>Natuleig</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero incidunt illum ad voluptatem eum quo.</p>
            </div>
        </main>

        <ItemListContainer greeting="Hola! Bienvenido"/>
        <Footer/>
        </>
    )
}
export default App;
