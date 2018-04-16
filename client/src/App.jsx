import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Hero from "./components/Hero";
import Container from "./components/Container";
import NavTabs from "./components/NavTabs";
import SearchForm from "./components/SearchForm";
import News from "./components/News"
import "./App.css";

const App = () => (
  <Router>
    <Wrapper>
      <Hero />
      <Container>
      	<SearchForm />
      	<NavTabs />
      	<Route path="/news" component={News} />
      	<Route path="/saved" component={Wrapper} />
      </Container>
    </Wrapper>
  </Router>
)

export default App;
