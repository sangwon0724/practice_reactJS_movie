import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import Home from "./route/Home";
import About from "./route/About";

function App(){
  return <HashRouter>
    <Route path="/" component={Home} exact={true}/>
    <Route path="/about" component={About} exact={true}/>
  </HashRouter>
}

export default App;