// REACT
import React from "react";
// REACT ROUTER
import { Route, Routes } from "react-router-dom";
// COMPONENTS
import HomeScreen from "./Pages/HomeScreen";
import About from "./Pages/About";
import Contact from "./Pages/Contact";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/about" exact element={<About />} />
      <Route path="/contact" exact element={<Contact />} />
    </Routes>
  );
}

export default App;
