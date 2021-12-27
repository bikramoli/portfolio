import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import "./Style.css";
import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";

import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Switch>
        <Route exact path = "/" component = { Home } />
        <Route exact path = "/skills" component = { Skills } />
        <Route exact path = "/projects" component = { Projects } />
        <Route exact path = "/resume" component = { Resume } />
        <Route exact path = "/contact" component = { Contact } />
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}
export default App;
