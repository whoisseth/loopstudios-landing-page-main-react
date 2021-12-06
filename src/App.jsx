import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//
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
    <>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact />
            <Route path="/about" component={About} />
            <Route path="/careers" component={Careers} />
            <Route path="/events" component={Events} />
            <Route path="/products" component={Products} />
            <Route path="/support" component={Support} />
          </Switch>
          <Header />
          <MainSection />
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
