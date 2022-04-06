import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  BrowserRouter as Router
} from 'react-router-dom';
import { FilterContextProvider } from "./utils/filterContext";
import { WishlistContextProvider } from "./utils/wishlistContext";
import { CartContextProvider } from "./utils/cartContext";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CartContextProvider>
        <WishlistContextProvider>
          <FilterContextProvider>
            <App />
          </FilterContextProvider>
        </WishlistContextProvider>
      </CartContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);