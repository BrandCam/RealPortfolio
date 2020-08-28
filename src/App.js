import React, { useRef, useLayoutEffect, useState } from "react";
import logo from "./logo.svg";
import Canvas from "./Components/Canvas/Canvas2";
import Crt from "./Components/UI/Crt.style";
import { Switch, Route, useLocation } from "react-router-dom";
import RouterView from "./Pages/Router-View.style";
import { Home, Skills, Projects, Contact, About, Sf } from "./Pages/index";
import CanvasContext from "./Context/CanvasContext";

const resetScroll = (ref) => {
  ref.current.scrollTop = 0;
};

function App() {
  const viewPort = useRef(null);
  let [canvasVars, setCanvasVars] = useState({
    center: true,
    speed: 1,
  });
  let { pathname } = useLocation();
  useLayoutEffect(() => {
    if (pathname === "/N7-64") {
      setCanvasVars({ ...canvasVars, center: false });
    }
    if (pathname !== "/N7-64" && canvasVars.center === false) {
      setCanvasVars({ ...canvasVars, center: true });
    }
  }, [pathname]);

  return (
    <CanvasContext.Provider value={{ canvasVars, setCanvasVars }}>
      <div className="App">
        <Switch>
          <RouterView
            style={{
              pointerEvents: `${pathname === "/N7-64" ? "none" : "auto"}`,
            }}
            ref={viewPort}
          >
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
            <Route path="/N7-64">
              <Sf page="N7-64" vp={viewPort} />
            </Route>
          </RouterView>
        </Switch>
        <Crt />
        <Canvas />
      </div>
    </CanvasContext.Provider>
  );
}

export default App;
