import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ListCtxProvider from "./Components/Context/ListCtxProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "./Components/Store/ListStore.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <Provider store={Store}>
    <BrowserRouter>
      <ListCtxProvider>
        <App />
      </ListCtxProvider>
    </BrowserRouter>
  </Provider>
);
