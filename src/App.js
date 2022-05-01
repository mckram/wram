import "./App.css";
import Home from "./Views/home/home";
import Services from "./Views/services/services";
import ContactForm from "./Views/contact/contact";
import Footers from "./Components/footer/footer";
import Navbar from "./Components/navbar/navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import React from "react";

function App() {
  const location = useLocation();
  return (
    <>
    <div key="c" className="App">
      <Navbar></Navbar>
      <Routes key={0}>
        <Route
          location={location}
          key={location.pathname}
          path="/"
          element={<Home />}
        />
         <Route
          location={location}
          key={location.pathname}
          path="/services"
          element={<Services />}
        />
          <Route
          location={location}
          key={location.pathname}
          path="/contact"
          element={<ContactForm />}
        />
      </Routes>
    </div>
    <Footers key="d" />
    </>
    );
}

export default App;
