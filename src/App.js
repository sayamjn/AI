import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import CssBaseline from '@mui/material/CssBaseline';




const App = () => {
  return (
      <div>
      <CssBaseline />
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          {/* <Route path="/products" element={Products} /> */}
        </Routes>
        <Footer />
      </div>
  );
};



export default App;
