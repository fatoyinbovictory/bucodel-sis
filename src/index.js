import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  ContextProvider,
  ContextProviderAdmin,
  ContextProviderFacilitator
} from "./Context/Context";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <ContextProviderAdmin>
        <ContextProviderFacilitator>
          <App />
        </ContextProviderFacilitator>
      </ContextProviderAdmin>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
