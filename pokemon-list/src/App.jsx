import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokemonDisplay from "./components/PokemonDisplay";
import PokemonShop from "./components/PokemonShop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import "./components/Header.css";
import "./components/Footer.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<PokemonDisplay />} /> {/* หน้าเริ่มต้น */}
          <Route path="/shop" element={<PokemonShop />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
