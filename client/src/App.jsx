import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Hero from "./components/Hero";
import "./App.css";

const App = () => (
  <Router>
    <Wrapper>
      <Hero />
    </Wrapper>
  </Router>
)

export default App;
