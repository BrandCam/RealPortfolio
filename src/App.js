import React, { useRef, useLayoutEffect, useState } from "react";
import logo from "./logo.svg";
import Canvas from "./Components/Canvas/Canvas";
import Crt from "./Components/UI/Crt.style";
import { Switch, Route } from "react-router-dom";
import RouterView from "./Pages/Router-View.style";
import { Home, Skills, Projects, Contact, About } from "./Pages/index";
const resetScroll = (ref) => {
  ref.current.scrollTop = 0;
};

function App() {
  const viewPort = useRef(null);

  useLayoutEffect(() => {
    console.log(viewPort.current.scrollTop);
  });
  return (
    <div className="App">
      <Switch>
        <RouterView ref={viewPort}>
          <Route exact path="/">
            <Home vp={viewPort} />
          </Route>
          <Route path="/about">
            <About vp={viewPort} />
          </Route>
          <Route path="/projects">
            <Projects vp={viewPort} />
          </Route>
          <Route path="/skills">
            <Skills vp={viewPort} />
          </Route>
          <Route path="/contact">
            <Contact vp={viewPort} />
          </Route>
        </RouterView>
      </Switch>
      <Crt />
      <Canvas />
    </div>
  );
}

export default App;
