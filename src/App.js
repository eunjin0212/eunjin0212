import React from "react";
import Header from "./Components/Header";
import Top from "./Components/Top";
import About from "./Components/About";
import Ending from "./Components/Ending";

import "../src/CSS/index.css";
import "../src/CSS/font.css";
import "../src/CSS/ending.css";
const App = () => {
    return (
        <>
            <Header />
            <Top />
            <About />
            <Ending />
        </>
    );
};

export default App;
