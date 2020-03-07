import React, { Fragment } from "react";
import GlobalStyles from "./Global";
import Home from "./components/Home";
import Promo from "./components/Promo";
import Schedule from "./components/Schedule";
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
      <Schedule />
      <Promo />
      <Footer />
    </Fragment>
  );
}

export default App;
