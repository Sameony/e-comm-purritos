import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  BrowserRouter as Router
} from 'react-router-dom';
import { WishlistContextProvider, CategoryProvider, FilterContextProvider, CartContextProvider } from "./utils";
import { makeServer } from "./server";
import { ProductProvider } from "./utils/productContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <ProductProvider>
      <CategoryProvider>
        <CartContextProvider>
          <WishlistContextProvider>
            <FilterContextProvider>
                <App />
            </FilterContextProvider>
          </WishlistContextProvider>
        </CartContextProvider>
      </CategoryProvider>
    </ProductProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);