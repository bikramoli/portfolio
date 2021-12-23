import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Style.css";
import NavBar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
    </div>
  );
}

export default App;
