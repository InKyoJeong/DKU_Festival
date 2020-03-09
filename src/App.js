import React, { Fragment } from "react";
import GlobalStyles from "./Global";
// import Main from "./components/Main";
// import Header from "./components/Header";
// import Fire from "./Fire";
import "./App.css";

// import Footer from "./components/Footer";
import Router from "./components/Router";

function App() {
  return (
    <Fragment>
      <Router />
      <GlobalStyles />
    </Fragment>
  );
}

export default App;
