import React, { Component } from "react";
import Loading from "./Components/Loading";
import About from './Components/About'
import Header from "./Components/Header";
import Cover from "./Components/Cover"

import "../src/CSS/index.css"
import "../src/CSS/about.css"
class App extends Component {
  render() {
    return (
      <>
      <Header/>
        <Loading />
        <Cover/>
        <About />
      </>
    );
  }
}

export default App;
