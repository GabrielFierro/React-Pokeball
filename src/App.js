import React, { Component } from "react";
import "./App.css";
import Pokeball from "./Pokeball/Pokeball";
import Ultraball from "./Pokeball/Ultraball";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokeball />
        <Ultraball />
      </div>
    );
  }
}

export default App;