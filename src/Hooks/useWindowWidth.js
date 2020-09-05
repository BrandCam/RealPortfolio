import { useState, useEffect } from "react";

const getWindow = () => {
  let { innerWidth: width } = window;
  return width;
};

const useWindow = () => {
  const [windowWidth, setWindowWidth] = useState(getWindow());
  //grab window width
  useEffect(() => {
    let handleResize = () => {
      setWindowWidth(getWindow());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
};

export default useWindow;
