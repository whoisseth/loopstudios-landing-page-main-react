import './App.css';
import Header from './components/header/Header';
import {BrowserRouter as  Router, Routes, Route, Link} from  'react-router-dom'
// Importing NavLinks
import About from './components/navLinks/About'
import Careers from './components/navLinks/Careers'
import Events from './components/navLinks/Events'
import Products from './components/navLinks/Products'
import Support from './components/navLinks/Support'


function App() {
  return (
    <div className="App">
      <Router>
      {/* <Header/> */}
     <Routes>
       <Route path="/" element={Careers} />
       <Route   path="/about" element={About}/>
       <Route path="/careers" element={Careers}/>
       <Route path="/events" element={Events}/>
       <Route path="/products" element={Products}/>
       <Route path="/support" element={Support}/>
     </Routes>
     <Link to="/about"><h1>About</h1></Link>
      <Support/>
      </Router>
    </div>
  );
}

export default App;
