import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ContextGlobalProvider from "./Components/utils/global.context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextGlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="contact" element={<Contact />} />
            <Route path="detail" element={<Detail />} />
            <Route path="favorites" element={<Favs />} />
            <Route path="home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextGlobalProvider>

  </React.StrictMode>
);
