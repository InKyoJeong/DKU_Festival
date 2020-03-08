import React, { Fragment } from "react";
import GlobalStyles from "./Global";
import Home from "./components/Home";
import Header from "./components/Header";
import Fire from "./Fire";
import "./App.css";

import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Fire />
      <Header />
      <Home />
      <Footer />
    </Fragment>
  );
}

export default App;
