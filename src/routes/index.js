// Init
import React from "react";
import { Advertising } from "../containers/Advertising";
import Consulting from "../containers/Consulting";
import ProductDevelopment from "../containers/ProductDevelopment";
import { ProductLine } from "../containers/ProductLine";
// import Contact from "../containers/Contact";
import { Route, Switch } from "react-router-dom";

// Routes
import Home from "../containers/Home.js";
import Contact from "../containers/Contact";

const index = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Advertising" component={Advertising} />
      <Route exact path="/ProductDevelopment" component={ProductDevelopment} />
      <Route exact path="/ProductLine" component={ProductLine} />
      <Route exact path="/Consulting" component={Consulting} />
      <Route exact path="/Contact" component={Contact} />
    </Switch>
  );
};

export default index;
