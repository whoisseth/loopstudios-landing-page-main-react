import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Importing NavLinks
import About from "./components/navLinks/About";
import Careers from "./components/navLinks/Careers";
import Events from "./components/navLinks/Events";
import Products from "./components/navLinks/Products";
import Support from "./components/navLinks/Support";
// Main components
import Header from "./components/header/Header";
import IntractiveSection from "./components/intractiveSection/IntractiveSection";
import CreationSection from "./components/creationsSection/CreationSection";
import GallarySection from "./components/gallarySection/GallarySection";
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
        <IntractiveSection />
        <CreationSection />
        <GallarySection />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
