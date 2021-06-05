import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import Home from "./route/Home";
import About from "./route/About";
import Detail from "./route/Detail";
import Navigation from "./components/Navigation";

function App(){
  return(
  <HashRouter>
    <Navigation />
    <Route path="/" component={Home} exact={true}/>
    <Route path="/about" component={About} exact={true}/>
    <Route path="/movie/:id" component={Detail} exact={true}/>
  </HashRouter>
  );
}

export default App;