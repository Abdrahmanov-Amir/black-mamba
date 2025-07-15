import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "../Home";
import ProductList from "../ProductList"; 
import Contacts from "../Contacts";
import Balls from "../../products/Balls"; 
import Cart from "../Cart";

const AppRouter = () => {
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
 
    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    }

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
    }

    return (
        <Router>
            <nav>
                <Link to='/'>Главная</Link>
                <Link to='/shoes'>Обувь</Link>
                <Link to='/balls'>Мячи</Link>
                <Link to='/contacts'>Контакты</Link>
                <button className="Korzina" onClick={toggleCart}>Корзина ({cart.length})</button>
            </nav>
            {isCartOpen && <Cart toggleCart={toggleCart} removeFromCart={removeFromCart} cart={cart}/>}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shoes" element={<ProductList addToCart={addToCart}/>} />
                <Route path="/balls" element={<Balls />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;