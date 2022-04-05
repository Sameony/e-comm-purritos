import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  BrowserRouter as Router
} from 'react-router-dom';
import { FilterContextProvider } from "./utils/filterContext";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <FilterContextProvider>
        <App />
      </FilterContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);