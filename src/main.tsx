import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Homepage/Home";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
