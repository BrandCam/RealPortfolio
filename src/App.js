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
            <Home page="HOME" vp={viewPort} />
          </Route>
          <Route path="/about">
            <About page="ABOUT" vp={viewPort} />
          </Route>
          <Route path="/projects">
            <Projects page="PROJECTS" vp={viewPort} />
          </Route>
          <Route path="/skills">
            <Skills page="SKILLS" vp={viewPort} />
          </Route>
          <Route path="/contact">
            <Contact page="CONTACT" vp={viewPort} />
          </Route>
        </RouterView>
      </Switch>
      <Crt />
      <Canvas />
    </div>
  );
}

export default App;
