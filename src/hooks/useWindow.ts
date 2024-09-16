import { useEffect, useState } from "react";

const useWindow = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [fromTop, setFromTop] = useState(window.scrollY);
  const [fromBottom, setFromBottom] = useState(
    document.documentElement.scrollHeight - window.innerHeight - window.scrollY
  );

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
    setFromBottom(
      document.documentElement.scrollHeight -
        window.innerHeight -
        window.scrollY
    );
  };

  const handleScroll = () => {
    setFromTop(window.scrollY);
    setFromBottom(
      document.documentElement.scrollHeight -
        window.innerHeight -
        window.scrollY
    );
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return {
    screenWidth,
    screenHeight,
    fromTop,
    fromBottom,
  };
};

export { useWindow };
