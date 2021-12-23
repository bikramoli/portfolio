import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import "./Style.css";
import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Switch>
        <Route exact path = "/" component = {Home} />
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
