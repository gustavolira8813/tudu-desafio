import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResetStyle from "./styles/reset/ResetStyle";
import { GlobalStyle } from "./styles/GlobalStyle";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Main from "./pages/Main";
import MenuFooter from "./components/MenuFooter";
import Providers from "./providers";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Providers>
      <BrowserRouter>
        <ResetStyle />
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="welcome" element={<Welcome />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="main" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </Providers>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
