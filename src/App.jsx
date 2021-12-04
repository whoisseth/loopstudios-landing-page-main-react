import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
// Importing NavLinks
import About from "./components/navLinks/About";
import Careers from "./components/navLinks/Careers";
import Events from "./components/navLinks/Events";
import Products from "./components/navLinks/Products";
import Support from "./components/navLinks/Support";
// components
import Header from "./components/header/Header";
import MainSection from "./components/mainSection/MainSection";
import Footer from "./components/footerSection/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/about" element={About} />
          <Route path="/careers" element={Careers} />
          <Route path="/events" element={Events} />
          <Route path="/products" element={Products} />
          <Route path="/support" element={Support} />
        </Routes>
        <Header />
        <MainSection />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
