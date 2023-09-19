import { useRef, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/itemListContainer'
import ItemDetialContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartContextProvider } from './context/CartContext'
import Footer from './components/footer/Footer'
import './App.css'



function App() { 
    // estados y funciones para context
    // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
    // link -> navegar a una url
    return (
        <Router>
            <CartContextProvider>
                <NavBar />  
                <Routes>
                    <Route path='/ItemListContainer' element={<ItemListContainer /> }/>
                    <Route path='/category/:cid' element={<ItemListContainer /> }/>
                    <Route path='/detalle/:pid' element={<ItemDetialContainer /> }/>         
                </Routes>
                <Footer />  
            </CartContextProvider>            
        </Router>
    )
}

export default App

