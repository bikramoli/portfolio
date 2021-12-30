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
        <Route  path = "/" exact component = { Home } />
        <Route  path = "/skills" component = { Skills } />
        <Route  path = "/projects" component = { Projects } />
        <Route  path = "/resume" component = { Resume } />
        <Route  path = "/contact" component = { Contact } />
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}
export default App;
