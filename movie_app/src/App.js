import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import Home from "./route/Home";
import About from "./route/About";
import Navigation from "./components/Navigation";

function App(){
  return(
  <HashRouter>
    <Navigation />
    <Route path="/" component={Home} exact={true}/>
    <Route path="/about" component={About} exact={true}/>
  </HashRouter>
  );
}

export default App;