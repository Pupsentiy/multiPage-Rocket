import { useLayoutEffect, useState, createContext, useContext } from "react";
import { TMyGlobalContext } from "../@types/global";

export function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

export const myContext = createContext<TMyGlobalContext>({
  activeForm: true,
  activeBurgerMenu: true,
  setActiveForm: (_value: boolean) => {},
  setActiveBurgerMenu: (_value: boolean) => {},
});

export const useGlobalContext = () => useContext(myContext);
