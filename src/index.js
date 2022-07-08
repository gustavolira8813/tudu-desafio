import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import ResetStyle from "./styles/reset/ResetStyle";
import { GlobalStyle } from "./styles/GlobalStyle";

import Providers from "./providers";
import Rotas from "./routes";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Providers>
      <BrowserRouter>
        <ResetStyle />
        <GlobalStyle />
        <Rotas />
      </BrowserRouter>
    </Providers>
  </React.StrictMode>
);

reportWebVitals();
