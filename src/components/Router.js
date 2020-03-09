import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Fire from "../Fire";
import Home from "./Routes/Home";

export default () => {
  return (
    <Router>
      <Fire />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
    </Router>
  );
};
