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
    <Routes>
      <Route path="/" element={<Home/>} exact={true}/>
      <Route path="/about" element={<About/>} exact={true}/>
      <Route path="/movie/:id" element={<Detail/>} exact={true}/>
    </Routes>
  </HashRouter>
  );
}

export default App;
