import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Style.css";
import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <NavBar/>
      <Home/>
      <Footer/>
    </Router>
  );
}

export default App;
