import React, { Fragment } from "react";
import GlobalStyles from "./Global";
import Red from "./components/Red";
import Blue from "./components/Blue";
import Header from "./components/Header";
import Fire from "./Fire";
function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Fire />
      <Header />
      <Red />
      <Blue />
    </Fragment>
  );
}

export default App;
