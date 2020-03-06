import React, { Fragment } from "react";
import GlobalStyles from "./Global";
import Red from "./components/Red";
import Blue from "./components/Blue";
import Header from "./components/Header";
import Fire from "./Fire";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Fire />
      <Header />

      <Red />
      <Blue />
      <Footer />
    </Fragment>
  );
}

export default App;
