import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  BrowserRouter as Router
} from 'react-router-dom';
import { FilterContextProvider } from "./utils/filterContext";
import { WishlistContextProvider } from "./utils/wishlistContext";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <WishlistContextProvider>
        <FilterContextProvider>
          <App />
        </FilterContextProvider>
      </WishlistContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);