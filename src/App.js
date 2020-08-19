import React from "react";
import logo from "./logo.svg";
import Canvas from "./Components/Canvas";
import Crt from "./Components/Crt.style";
import { Switch, Route } from "react-router-dom";
import RouterView from "./Pages/Router-View.style";
import { Home, Skills, Projects, Contact, About } from "./Pages/index";

function App() {
  return (
    <div className="App">
      <Switch>
        <RouterView>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </RouterView>
      </Switch>
      <Crt />
      <Canvas />
    </div>
  );
}

export default App;
