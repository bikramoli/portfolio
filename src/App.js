import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import "./Style.css";
import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/about" component={About}/>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
