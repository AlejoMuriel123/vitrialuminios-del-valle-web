import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { withStyles } from "@mui/material/styles";
import { ThemeProvider } from "@material-ui/core/styles";

import "./App.css";
import Home from "./Pages/Home";
import Contactus from "./Pages/Contactus";
import Navbar from "./Components/Navbar";
import Products from "./Pages/Products";
import Footer from "./Components/Footer";
import Logo from "./Images/Logo.jpg";
import theme from "./themeConfig";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <header className="header">
          <img src={Logo} className="logo" alt="Logo"></img>
          <h1 className="title">VITRIALUMINIOS ASOCIADOS SAS</h1>
          <ul>
            <li>Telefono</li>
            <li>Direccion</li>
          </ul>
        </header>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/Products" element={<Products />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
