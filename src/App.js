import React, { Component } from "react";
import Main from "./Component/Maincomponent";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App ">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
