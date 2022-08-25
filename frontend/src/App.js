import React, { Component } from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddClient from "./components/add-client.component.js";
import Client from "./components/client.component.js";
import ClientsList from "./components/clients-list.component.js";

import axios from "axios";
import { useEffect } from "react";

function App(){
  useEffect(()=> {
    axios.get("http://localhost:3232/api/client").then((response) => {
      console.log("FUNFO");
    })
  }, []);
  return <div className="App"></div>;
}
export default App;


/*
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/clients" className="navbar-brand">
            WebTest
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/clients"} className="nav-link">
                Clients
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/client"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<ClientsList/>} />
            <Route exact path="/client" element={<AddClient/>} />
            <Route exact path="/clients/:id" element={<Client/>} />
          </Routes>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;
*/
/*import "bootstrap/dist/css/bootstrap.min.css";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
