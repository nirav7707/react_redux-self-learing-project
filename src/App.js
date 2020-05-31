import React from "react";
import "./styles.css";
import {Navbar, NavbarBrand} from 'reactstrap'
export default function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Nirav</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}
