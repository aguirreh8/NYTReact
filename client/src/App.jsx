import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Hero from "./components/Hero";
import Container from "./components/Container"
import "./App.css";

const App = () => (
  <Router>
    <Wrapper>
      <Hero />
      <Container>
      	<ul className="nav nav-tabs">
      		<li className="nav-item">
      			<a href="" className='nav-link active'>News</a>
      		</li>
      		<li className="nav-item">
      			<a href="" className="nav-link">Saved</a>
      		</li>
      	</ul>
      </Container>
    </Wrapper>
  </Router>
)

export default App;
