import { Landing, Cart, Products, Wishlist, Invalid, LoginSignup } from './routes';
import './App.css';
import { NavBar, Footer } from './components';
import React from 'react';
import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Products" element={<Products/>}/>
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="*" element={<Invalid/>} />
      </Routes>
      
    </div>
  );
}

export default App;
