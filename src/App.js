import React, { Component } from "react";
import "./styles.css";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./Component/menuComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="danger">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu />
      </div>
    );
  }
}

export default App;
