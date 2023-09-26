import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar'
import HeroSection from './components/main/HeroSection'
import FeaturedProducts from './components/main/FeaturedProducts'
import ValuePropositions from './components/main/ValuePropositions'
import AboutUs from './components/main/AboutUs'
import Testimonials from './components/main/Testimonials'
import ItemListContainer from './components/ItemListContainer/itemListContainer'
import Contact from './components/footer/Contact'
import ItemDetialContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartContextProvider } from './context/CartContext'
import CartContainer from './components/CartContainer/CartContainer';
import './App.css'


function Home() {
    return (
        <div>
            <div id="HeroSection">
                <HeroSection />
            </div>
            <div id="FeaturedProducts">
                <FeaturedProducts />
            </div>
            <div id="AboutUs">
                <AboutUs />
            </div>
            <div id="ValuePropositions">
                <ValuePropositions />
            </div>
            <div id="Testimonials">
                <Testimonials />
            </div>
            <div id='Contact'>
                <Contact />
            </div>
            <Outlet />
        </div>
    )
}

function App() { 
    return (
        <Router>
            <CartContextProvider>
                <NavBar />  
                <Routes>
                <Route path='/Home' element={ <Home /> } />
                {/* <Route path='/category/:cid' element={ <Home /> } /> */}
                    <Route path='/ItemListContainer' element={<ItemListContainer /> }/>
                    <Route path='/category/:cid' element={<ItemListContainer /> }/>
                    <Route path='/detalle/:pid' element={<ItemDetialContainer /> }/>
                    <Route path='/cart' element={<CartContainer /> }/>
                </Routes>
            </CartContextProvider>            
        </Router>
    )
}


export default App; Home

