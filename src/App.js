import React, { useRef, useLayoutEffect, useState } from "react";
import logo from "./logo.svg";
import Canvas from "./Components/Canvas/Canvas2";
import Crt from "./Components/UI/Crt.style";
import { Switch, Route, useLocation } from "react-router-dom";
import RouterView from "./Pages/Router-View.style";
import { Home, Skills, Projects, Contact, About, Sf } from "./Pages/index";
import CanvasContext from "./Context/CanvasContext";
import { AnimatePresence, motion } from "framer-motion";
import Static from "./Components/UI/Static.styles";
import staticImg from "./img/static.png";
const resetScroll = (ref) => {
  ref.current.scrollTop = 0;
};

function App() {
  // VARS
  const viewPort = useRef(null);
  let [showStatic, setShowStatic] = useState(false);
  let [canvasVars, setCanvasVars] = useState({
    center: true,
    warpZ: 12,
    Z: 0.1,
    zModFunc: null,
  });
  let location = useLocation();
  let { pathname } = location;
  // canvas vars
  let { center, zModFunc } = canvasVars;

  //Check to see if canvas needs re rendered

  useLayoutEffect(() => {
    if (pathname === "/N7-64") {
      setCanvasVars({ ...canvasVars, center: false });
    }
    if (pathname !== "/N7-64" && canvasVars.center === false) {
      setCanvasVars({ ...canvasVars, center: true });
    }
  }, [pathname]);

  return (
    <CanvasContext.Provider
      value={{ canvasVars, setCanvasVars, setShowStatic, showStatic }}
    >
      <div className="App">
        <RouterView
          style={{
            pointerEvents: `${pathname === "/N7-64" ? "none" : "auto"}`,
          }}
          ref={viewPort}
        >
          <Static className={showStatic ? "show" : ""}>
            <img src={staticImg} />
          </Static>
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
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
            </Switch>
          </AnimatePresence>
        </RouterView>

        <Crt />
        <Canvas className="bg-canvas" />
      </div>
    </CanvasContext.Provider>
  );
}

export default App;
